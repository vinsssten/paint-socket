import UsersTable from '../../../models/UsersTable';
import DatabaseGetter from '../Database-controller/DatabaseGetter';

const db = new DatabaseGetter();

class UserController {
    async getSelfProfile(id: string) {
        try {
            const pool = await db.connect();

            const userData: UsersTable[] = await db.getRowByField(
                pool,
                'Users',
                'id',
                id,
            );
            if (userData.length === 0) {
                throw Error('User profile didnt finded in getSelfProfile');
            }
            const curUser = userData[0];
            return {
                login: curUser.login,
                username: curUser.username,
                avatar: curUser.avatar,
                createDate: curUser.create_date,
            };
        } catch (error) {
            throw error;
        }
    }
}

export default UserController;
