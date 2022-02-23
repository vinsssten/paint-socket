import { Client, Connection, Pool } from 'pg';
import FriendsTable, {
    FriendFindResponse,
    FriendsResponse,
    RelationTypeMap,
} from '../../models/FriendsTable';
import UsersTable, { FindUsersTable } from '../../models/UsersTable';
import { FriendStatus, Friend } from '../../models/FriendsTable';

class FriendsControllerService {
    //Возвращает массив с указанием друг ли пользователь, ждет ли подтверждения заявка, или еще не друг
    static tagFriendsInUsersList(
        id: string,
        usersList: Friend[],
        relationType: RelationTypeMap,
    ): FriendFindResponse {
        let friendsList: FriendFindResponse = { friends: [], invites: [], finded: [] };
        usersList.forEach(value => {
            const status: FriendStatus | undefined = relationType.get(value.id);
            console.log('curStatus', status);
            if (value.id === id) {
                return;
            }
            if (status !== undefined) {
                if (status === 'Friends') {
                    friendsList.friends.push({
                        id: value.id,
                        username: value.username,
                        avatar: value.avatar,
                        last_online: value.last_online,
                    });
                } else if (status === 'Pending') {
                    friendsList.invites.push({
                        id: value.id,
                        username: value.username,
                        avatar: value.avatar,
                    });
                }
            } else {
                friendsList.finded.push({
                    id: value.id,
                    username: value.username,
                    avatar: value.avatar,
                });
            }
        });

        return friendsList;
    }

    static async getFriendsRows(
        connection: Pool | Client,
        id: string,
    ): Promise<FriendsTable[]> {
        let sql = `SELECT * FROM public."Friends" WHERE first_id='${id}' OR second_id='${id}'`;
        const friendsList = (await connection.query<FriendsTable>(sql)).rows;
        return friendsList;
    }

    static getFriendsListIds(
        friendsList: FriendsTable[],
        id: string,
    ): { listIdFriends: string[]; realitionTypeByIdMap: RelationTypeMap } {
        const listIdFriends: string[] = [];
        const realitionTypeByIdMap: RelationTypeMap = new Map();
        friendsList.forEach(item => {
            let curId = '';
            if (item.first_id === id) {
                listIdFriends.push(item.second_id);
                curId = item.second_id;
            } else if (item.second_id === id) {
                listIdFriends.push(item.first_id);
                curId = item.first_id;
            }
            realitionTypeByIdMap.set(curId, item.status);
        });

        return { listIdFriends, realitionTypeByIdMap };
    }
}

export default FriendsControllerService;
