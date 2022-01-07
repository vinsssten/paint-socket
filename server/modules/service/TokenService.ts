import DatabaseController from "../controllers/DatabaseController";
import DatabaseGetter from "../controllers/DatabaseGetter";
import ApiError from "../exceptions/ApiError";

const jwt = require('jsonwebtoken');
const colors = require('colors');
const dotenv = require('dotenv').config();

export interface Tokens {
    accessToken: string, 
    refreshToken: string
}

class TokenService {
    generateTokens (payload: object): Tokens {
        const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {accessToken, refreshToken}
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
                    db.run(`INSERT INTO Sessions VALUES ('${id}', '${refreshToken}')`,
                     (error) => { 
                        if (!error) {
                            console.log(`INSERT TOKEN TO ID ${id}`.green);
                            resolve({message: 'Saved'});
                        } else {
                            console.log('reject insert')
                            reject(error)
                        }
                    });
                });

            } else {
                db.serialize(() => {
                    db.run(`UPDATE Sessions SET refreshToken='${refreshToken}' WHERE id='${id}'`,
                    (error) => {
                        if (!error) {
                            console.log(`TOKEN UPDATE FOR ID ${id}`.green);
                            resolve({message: 'Saved'});
                        } else {
                            console.log('reject update')
                            reject(error);
                        }
                    })
                })
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

            const currentSession = await new DatabaseGetter().getRowByField('Sessions', 'refreshToken', refreshToken);
            if (currentSession.length === 0) {
                reject(ApiError.BadRequest('Session didnt find'));
            } 
            db.serialize( () => {
                db.run(`DELETE FROM Sessions WHERE refreshToken='${refreshToken}'`, (err) => {
                    if (!err) {
                        // console.log(`Logout success for user with login: ${currentSession[0].id}`);
                        resolve({message: 'Logout success'})
                    } else {
                        reject(err);
                    }
                })
            })

            db.close();
        } catch (error) {
            console.log('low level catch'.red)
            reject(error);
        }
    });
}

export default TokenService