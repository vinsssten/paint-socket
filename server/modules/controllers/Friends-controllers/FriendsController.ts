import { Pool } from 'pg';
import FriendsTable, { FriendsResponse, FriendStatus } from '../../../models/FriendsTable';
import UsersTable from '../../../models/UsersTable';
import SuccessMessages from '../../service/SuccessMessages';
import DatabaseController from '../Database-controller/DatabaseController';
import DatabaseGetter from '../Database-controller/DatabaseGetter';

const dbController = new DatabaseController();
const dbGetter = new DatabaseGetter();

class FriendsController {
    async getFriendsList(id: string, connection: Pool | undefined = undefined): Promise<SuccessMessages | FriendsResponse> {
        if (!connection) {
            connection = await dbController.connect();
        }

        let sql = `SELECT * FROM public."Friends" WHERE first_id='${id}' OR second_id='${id}'`;
        const friendsList = (await connection.query<FriendsTable>(sql)).rows;
        
        if (friendsList.length === 0) {
            return SuccessMessages.friendsMissing();
        }

        const listIdFriends: string[] = [];
        const realitionTypeByIdList: Array<{id: string, status: FriendStatus}> = [];
        friendsList.forEach((item) => {
            let curId = '';
            if (item.first_id === id) {
                listIdFriends.push(item.second_id);
                curId = item.second_id;
            } else if (item.second_id === id) {
                listIdFriends.push(item.first_id);
                curId = item.first_id;
            }
            realitionTypeByIdList.push({id: curId, status: item.status})
        })
        const friendsIdsString = listIdFriends.slice().join("','");
        sql = `SELECT * FROM public."Users" WHERE id in ('${friendsIdsString}')`;
        const friendsProfiles: UsersTable[] = (await connection.query<UsersTable>(sql)).rows;
        const friendsResponse: FriendsResponse = {friendsList: [], invitesList: []};

        realitionTypeByIdList.forEach((item, index) => {
            friendsProfiles.forEach((profile, index) => {
                console.log(profile)
                if (profile.id === item.id) {
                    if (item.status === 'Friends') {
                        friendsResponse.friendsList.push({
                            id: profile.id, 
                            username: profile.username,
                            avatar: profile.avatar,
                            last_online: profile.last_online
                        })
                    } else if (item.status === 'Pending') {
                        friendsResponse.invitesList.push({
                            id: profile.id,
                            username: profile.username,
                            avatar: profile.avatar
                        })
                    }
                }
            })
        })

        return friendsResponse
    }

    async findFriends (username: string, userId: string): Promise<UsersTable[]> {
        const pool = await dbController.connect();
        const usersList: UsersTable[] = await dbGetter.getRowByField(pool, 'Users', 'username', username);
        const friendsList = this.getFriendsList(userId, pool);

                
    }
}

export default FriendsController;
