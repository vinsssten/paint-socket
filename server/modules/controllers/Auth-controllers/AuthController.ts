import { Pool } from 'pg';
import ApiError from '../../exceptions/ApiError';
import TokenService, { Tokens } from '../../service/TokenService';
import DatabaseGetter from '../Database-controller/DatabaseGetter';
import UsersTable from '../../../models/UsersTable';
import DatabaseController from '../Database-controller/DatabaseController';
import SuccessMessages from '../../service/SuccessMessages';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

interface RegistrationBody {
    login: string;
    username: string;
    password: string;
}

const db = new DatabaseGetter();

class AuthController {
    // private login = (user: UsersTable) =>
    //     new Promise<Tokens>(async (resolve, reject) => {
    //         try {
    //             const tokenService = new TokenService();
    //             const { accessToken, refreshToken } = await tokenService.generateTokens(
    //                 user.id,
    //                 user.login,
    //             );
    //             if (await tokenService.tokenSaveToDB(user.id, refreshToken)) {
    //                 resolve({ accessToken, refreshToken });
    //             }
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });

    // loginMain = ({ login, password }: RegistrationBody) =>
    //     new Promise<Tokens>(async (resolve, reject) => {
    //         try {
    //             const db = await this.connect();

    //             const currentUser = await this.getRowByField('Users', 'login', login);
    //             if (currentUser.length === 0) {
    //                 console.log('user with this login is was not found');
    //                 reject(ApiError.BadRequest('Incorrect login or password'));
    //             }

    //             if (await bcrypt.compare(password, currentUser[0].password)) {
    //                 resolve(await this.login(currentUser[0]));
    //             } else reject(ApiError.BadRequest('Incorrect login or password'));

    //             db.close();
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });

    // logout = (refreshToken: string) =>
    //     new Promise(async (resolve, reject) => {
    //         try {
    //             const removeToken = await new TokenService().removeToken(refreshToken);
    //             resolve(removeToken);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });

    async registration ({ login, username, password }: RegistrationBody) {
        try {
            const pool = await db.newConnect();
            const isUniqueLogin = await db.isUniqueValue(pool, 'Users', 'login', login);
            if (!isUniqueLogin) {
                throw ApiError.BadRequest('A user with this login already exists, try a different login')
            }

            const hashedPassword = await bcrypt.hash(password, 3);
            const id = uuid.v4();
            const sql = `INSERT INTO public."Users" (id, login, username, password, create_date) VALUES ('${id}', '${login}', '${username}', '${hashedPassword}', NOW())`;

            await pool.query(sql)
            return SuccessMessages.registered();
        } catch (error) {
            throw error
        }
    }
}

export default AuthController;
