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
    async login(login: string, password: string) {
        try {
            const pool = await db.connect();

            const rowsByLogin: UsersTable[] = await db.getRowByField(
                pool,
                'Users',
                'login',
                login,
            );
            if (rowsByLogin.length !== 1) {
                throw ApiError.IncorrectLoginOrPassword();
            }

            const curUser: UsersTable = rowsByLogin[0];

            if (!(await bcrypt.compare(password, curUser.password))) {
                throw ApiError.IncorrectLoginOrPassword();
            }

            const { accessToken, refreshToken } = TokenService.generateTokens(
                curUser.id,
                curUser.login,
            );
            const tokenController = new TokenController();
            await tokenController.saveInDB(pool, curUser.id, refreshToken);

            console.log(`THE USER ${curUser.login} LOGGED IN`.green);

            pool.end();

            return { accessToken, refreshToken };
        } catch (error) {
            throw error;
        }
    }

    async registration({ login, username, password }: RegistrationBody) {
        try {
            const pool = await db.connect();
            const isUniqueLogin = await db.isUniqueValue(pool, 'Users', 'login', login);
            if (!isUniqueLogin) {
                throw ApiError.BadRequest(
                    'A user with this login already exists, try a different login',
                );
            }

            const hashedPassword = await bcrypt.hash(password, 3);
            const id = uuid.v4();
            const sql = `INSERT INTO public."Users" (id, login, username, password, create_date) VALUES ('${id}', '${login}', '${username}', '${hashedPassword}', NOW())`;

            await pool.query(sql);
            pool.end();
            console.log(`USER ${login} HAS BEEN SUCCESSFULLY REGISTERED`.green);

            return SuccessMessages.registered();
        } catch (error) {
            throw error;
        }
    }

    async logout(refreshToken: string) {
        const pool = await db.connect();

        const tokenController = new TokenController();
        await tokenController.removeFromDB(pool, refreshToken);

        return SuccessMessages.logout();
    }

    async refresh(refreshTokenOld: string) {
        const userPayload = TokenService.validateRefreshToken(refreshTokenOld);
        if (!userPayload) {
            console.log('user payload', userPayload);
            throw ApiError.BadRequest('User payload is empty in refresh');
        }

        const pool = await db.connect();
        const { accessToken, refreshToken } = TokenService.generateTokens(
            userPayload.id,
            userPayload.login,
        );

        const tokenController = new TokenController();
        await tokenController.refreshInDB(pool, userPayload.id, refreshToken);

        console.log(`USER ${userPayload.login} REFRESH HIS TOKEN`.green);

        pool.end();
        return { accessToken, refreshToken };
    }

    async isValidToken(accessToken: string | null): Promise<string | false> {
        if (!accessToken) {
            return false;
        }

        const userPayload = TokenService.validateAccessToken(accessToken);

        if (!userPayload) {
            return false;
        }

        return accessToken;
    }
}

export default AuthController;
