import { Pool } from 'pg';
import FriendsTable, {
    Friend,
    FriendsResponse,
    FriendStatus,
} from '../../../models/FriendsTable';
import UsersTable, { FindUsersTable } from '../../../models/UsersTable';
import DatabaseController from '../Database-controller/DatabaseController';
import DatabaseGetter from '../Database-controller/DatabaseGetter';
import FriendsControllerService from '../../service/FriendsControllerService';

const dbController = new DatabaseController();
const dbGetter = new DatabaseGetter();

class FriendsController {
    async getFriendsList(
        id: string,
        connection: Pool | undefined = undefined,
    ): Promise<FriendsResponse> {
        if (!connection) {
            connection = await dbController.connect();
        }

        //FIXME: Пофиксить некорректную выдачу списка приглашений в друзья
        const friendsList = await FriendsControllerService.getFriendsRows(connection, id);
        const friendsResponse: FriendsResponse = { friendsList: [], invitesList: [] };

        if (friendsList.length === 0) {
            return friendsResponse;
        }

        const { listIdFriends, relationTypeByIdMap } =
        FriendsControllerService.getFriendsListIds(friendsList, id);

        const friendsIdsString: string = listIdFriends.slice().join("','");
        const sql = `SELECT * FROM public."Users" WHERE id in ('${friendsIdsString}')`;
        const friendsProfiles: UsersTable[] = (await connection.query<UsersTable>(sql))
            .rows;

        friendsProfiles.forEach((profile, index) => {
            const curStatus: FriendStatus | undefined = relationTypeByIdMap.get(
                profile.id,
            );
            if (curStatus !== undefined) {
                if (curStatus === 'Friends') {
                    friendsResponse.friendsList.push({
                        id: profile.id,
                        username: profile.username,
                        avatar: profile.avatar,
                        last_online: profile.last_online,
                    });
                } else if (curStatus === 'Pending') {
                    friendsResponse.invitesList.push({
                        id: profile.id,
                        username: profile.username,
                        avatar: profile.avatar,
                    });
                }
            }
        });

        return friendsResponse;
    }

    async findFriends(username: string, userId: string): Promise<any> {
        const pool = await dbController.connect();
        const rows = 'id, username, avatar, last_online';
        let sql = `SELECT * FROM public."Users" WHERE username LIKE '%' || '${username}' || '%'`;
        const usersList: Friend[] = (await pool.query<Friend>(sql)).rows;

        const friendsList = await FriendsControllerService.getFriendsRows(pool, userId);
        const { relationTypeByIdMap: relationType } =
            FriendsControllerService.getFriendsListIds(friendsList, userId);

        console.log(relationType)

        const taggedFindList = FriendsControllerService.tagFriendsInUsersList(
            userId,
            usersList,
            relationType,
        );
        return taggedFindList;
    }
}

export default FriendsController;
