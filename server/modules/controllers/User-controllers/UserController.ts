import UsersTable from '../../../models/UsersTable';
import TokenService from '../../service/TokenService';
import DatabaseController from '../Database-controller/DatabaseController';
import DatabaseGetter from '../Database-controller/DatabaseGetter';

const database = new DatabaseController();
const dbgetter = new DatabaseGetter();

class UserController {
    getSelfProfile = (accessToken: string) =>
        new Promise(async (resolve, reject) => {
            try {
                const { id: userId } = await new TokenService().validateAccessToken(
                    accessToken,
                );
                const curUser = await dbgetter.getRowByField('Users', 'id', userId);
                resolve({
                    login: curUser[0].login,
                    username: curUser[0].username,
                    avatar: curUser[0].avatar,
                    createDate: curUser[0].createDate,
                });
            } catch (err) {
                reject(err);
            }
        });
}

export default UserController;
