import { Client, Pool } from 'pg';
import FriendsTable, { Friend, FriendFindResponse, FriendStatus, RelationTypeMap } from '../../models/FriendsTable';

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
            console.log(value, 'status:', status)
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
                } else if (status === 'InviteSended') {
                    friendsList.finded.push({
                        id: value.id,
                        username: value.username,
                        avatar: value.avatar,
                        additionalStatus: 'InviteSended'
                    })
                }
            } else {
                friendsList.finded.push({
                    id: value.id,
                    username: value.username,
                    avatar: value.avatar,
                    additionalStatus: null
                });
            }
        });

        return friendsList;
    }

    static async getFriendsRows(
        connection: Pool | Client,
        id: string,
    ): Promise<FriendsTable[]> {
        let sql = `SELECT * FROM public."Friends" 
        WHERE first_id='${id}' OR second_id='${id}'`
        const friendsList = (await connection.query<FriendsTable>(sql)).rows;
        return friendsList;
    }

    static getFriendsListIds(
        friendsList: FriendsTable[],
        id: string,
    ): { listIdFriends: string[]; relationTypeByIdMap: RelationTypeMap } {
        const listIdFriends: string[] = [];
        const relationTypeByIdMap: RelationTypeMap = new Map();
        friendsList.forEach(item => {
            let curId = '';
            if (item.first_id === id && item.status === 'Pending') {
                curId = item.second_id;
                listIdFriends.push(curId);
                relationTypeByIdMap.set(curId, 'InviteSended');
            } else if (item.first_id === id && item.status === 'Friends') {
                curId  = item.second_id;
                listIdFriends.push(curId);
                relationTypeByIdMap.set(curId, 'Friends');
            } else if (item.second_id === id && item.status === 'Friends') {
                curId = item.first_id;
                listIdFriends.push(curId);
                relationTypeByIdMap.set(curId, 'Friends');
            } else if (item.second_id === id && item.status === 'Pending') {
                curId = item.first_id;
                listIdFriends.push(curId);
                relationTypeByIdMap.set(curId, 'Pending');
            }
        });

        return { listIdFriends, relationTypeByIdMap };
    }
}

export default FriendsControllerService;
