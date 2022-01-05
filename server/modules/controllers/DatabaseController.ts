import { Color } from 'colors';
import { Database, sqlite3 } from 'sqlite3';
import LoginParams from '../../models/LoginParams';
import UsersTable from '../../models/UsersTable';
import { RegistrationResolve } from './ResolveTypes';

const sqlite: sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
var colors: Color = require('colors');

class DatabaseController {
    protected static async databaseConnection() {
        console.log('Database connection...'.yellow);

        return await new Promise<Database>((resolve, reject) => {
            sqlite.verbose();
            const database = new sqlite.Database('../db/Paint.sqlite3', (err: any) => {
                if (!err) {
                    console.log(' DB CONNECTED! '.bgGreen.black);
                    resolve(database);
                } else {
                    reject(`Error in connection to db: ${err}`.red);
                }
            });
        });
    }

    static async registrateUser({ login, password, username }: LoginParams) {
        return await new Promise<RegistrationResolve>(async (resolve, reject) => {
            const db: any = await DatabaseController.databaseConnection().catch(reject);

            const id = uuid.v4();
            const hashedPassword = await bcrypt.hash(password, 3);

            db.serialize(() => {
                db.run(
                    `INSERT INTO Users (id, login, username, password) 
                    VALUES (?, ?, ?, ?)`,
                    [id, login, username, hashedPassword],
                    (err: Error | null) => {
                        if (err) {
                            const errorMessage: RegistrationResolve = {
                                code: 401,
                                message: `Error in registration: ${err}`,
                            };
                            reject(errorMessage);
                        } else {
                            console.log('Registration was succeed'.green);
                            resolve({
                                code: 200,
                                message: 'Registration successful',
                            });
                        }
                    },
                );
            });

            db.close((error: Error | null) => {
                if (error) {
                    console.log(`Some error in close ${error}`.red);
                } else {
                    console.log(` Login close db was succeed `.bgGreen.black);
                }
            });
        });
    }
}

export default DatabaseController;
