import { Request } from 'express';
import { isUndefined } from 'util';
import DatabaseController from '../controllers/Database-controller/DatabaseController';
import DatabaseGetter from '../controllers/Database-controller/DatabaseGetter';
import ApiError from '../exceptions/ApiError';

const jwt = require('jsonwebtoken');
const colors = require('colors');
const dotenv = require('dotenv').config();

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface TokenPayload {
    id: string;
    login: string;
}

class TokenService {
    generateTokens(id: string, login: string): Tokens {
        const payload: TokenPayload = { id: id, login: login };
        const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m',
        });
        const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d',
        });

        return { accessToken, refreshToken };
    }

    getTokenFromRequest (req: Request): string | null {
        const authHead = req.headers.authorization;
        const authWordSplit = authHead?.split(' ');
        
        if (authWordSplit && authWordSplit?.length > 0 ) {
            if (authWordSplit[1] !== undefined) {
                return authWordSplit[1]
            }
        }

        return null
    }

    validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    tokenSaveToDB = (id: string, refreshToken: string) =>
        new Promise(async (resolve, reject) => {
            try {
                const getter = new DatabaseGetter();
                const curUser = await getter.getRowByField('Sessions', 'id', id);

                const controller = new DatabaseController();
                const db = await controller.connect();
                if (curUser.length === 0) {
                    db.serialize(() => {
                        db.run(
                            `INSERT INTO Sessions VALUES ('${id}', '${refreshToken}')`,
                            error => {
                                if (!error) {
                                    console.log(`INSERT TOKEN TO ID ${id}`.green);
                                    resolve({ message: 'Saved' });
                                } else {
                                    console.log('reject insert');
                                    reject(error);
                                }
                            },
                        );
                    });
                } else {
                    db.serialize(() => {
                        db.run(
                            `UPDATE Sessions SET refreshToken='${refreshToken}' WHERE id='${id}'`,
                            error => {
                                if (!error) {
                                    console.log(`TOKEN UPDATE FOR ID ${id}`.green);
                                    resolve({ message: 'Saved' });
                                } else {
                                    console.log('reject update');
                                    reject(error);
                                }
                            },
                        );
                    });
                }

                controller.close(db);
            } catch (error) {
                reject(error);
            }
        });

    removeToken = (refreshToken: string) =>
        new Promise(async (resolve, reject) => {
            try {
                const db = await new DatabaseController().connect();

                const currentSession = await new DatabaseGetter().getRowByField(
                    'Sessions',
                    'refreshToken',
                    refreshToken,
                );
                if (currentSession.length === 0) {
                    reject(ApiError.BadRequest('Session didnt find'));
                }
                db.serialize(() => {
                    db.run(
                        `DELETE FROM Sessions WHERE refreshToken='${refreshToken}'`,
                        err => {
                            if (!err) {
                                // console.log(`Logout success for user with login: ${currentSession[0].id}`);
                                resolve({ message: 'Logout success' });
                            } else {
                                reject(err);
                            }
                        },
                    );
                });

                db.close();
            } catch (error) {
                console.log('low level catch'.red);
                reject(error);
            }
        });

    refreshToken = (refreshToken: string) =>
        new Promise<Tokens>(async (resolve, reject) => {
            try {
                const databaseGetter = new DatabaseGetter();
                if (!refreshToken) {
                    throw ApiError.UnauthorizeError();
                }
                const userDataPayload = this.validateRefreshToken(refreshToken);
                const tokenFromDb = await databaseGetter.getRowByField(
                    'Sessions',
                    'refreshToken',
                    refreshToken,
                );
                if (!userDataPayload && tokenFromDb.length > 0) {
                    throw ApiError.UnauthorizeError();
                }

                const userDataFromDb = await databaseGetter.getRowByField(
                    'Users',
                    'id',
                    tokenFromDb[0].id,
                );
                const { accessToken: newAccess, refreshToken: newRefresh } =
                    this.generateTokens(userDataFromDb[0].id, userDataFromDb[0].login);
                const saveToken = await this.tokenSaveToDB(
                    userDataFromDb[0].id,
                    newRefresh,
                );
                console.log(`Refresh token to ${userDataFromDb[0].id}`.bgGreen);
                resolve({ accessToken: newAccess, refreshToken: newRefresh });
            } catch (error) {
                reject(error);
            }
        });
}

export default TokenService;
