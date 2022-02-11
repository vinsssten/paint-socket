import { Pool } from 'pg';
import ApiError from '../../exceptions/ApiError';
import TokenService, { Tokens } from '../../service/TokenService';
import DatabaseGetter from '../Database-controller/DatabaseGetter';
import UsersTable from '../../../models/UsersTable';
import DatabaseController from '../Database-controller/DatabaseController';
import SuccessMessages from '../../service/SuccessMessages';
import TokenController from '../TokenController';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

interface RegistrationBody {
    login: string;
    username: string;
    password: string;
}

const db = new DatabaseGetter();

class AuthController {
    async login (login: string, password: string) {
        try {
            const pool = await db.newConnect();

            const rowsByLogin: UsersTable[] = await db.getRowByField(pool,'Users', 'login', login);
            if (rowsByLogin.length !== 1) {
                throw ApiError.IncorrectLoginOrPassword();
            }

            const curUser: UsersTable = rowsByLogin[0];
            
            if (!await bcrypt.compare(password, curUser.password)) {
                throw ApiError.IncorrectLoginOrPassword();
            } 

            const {accessToken, refreshToken} = TokenService.generateTokens(curUser.id, curUser.login);
            const tokenController = new TokenController();
            await tokenController.saveInDB(pool, curUser.id, refreshToken);

            console.log(`THE USER ${curUser.login} LOGGED IN`.green);

            pool.end()

            return {accessToken, refreshToken}
        } catch (error) {
            throw error
        }
    }

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
            pool.end()
            console.log(`USER ${login} HAS BEEN SUCCESSFULLY REGISTERED`.green)

            return SuccessMessages.registered();
        } catch (error) {
            throw error
        }
    }
}

export default AuthController;
