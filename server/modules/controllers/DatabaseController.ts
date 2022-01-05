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

    static async getUsersTable() {
        return await new Promise(async (resolve, reject) => {
            const db: any = await DatabaseController.databaseConnection().catch(reject);

            let users: UsersTable[] | null = null;
            db.serialize(() => {
                db.all('SELECT * FROM Users', (err: any, row: UsersTable[]) => {
                    if (err) {
                        reject(`Error in get users table: ${err}`);
                    } else {
                        users = row;
                    }
                });
            });

            db.close((error: any) => {
                if (error) {
                    console.log(`Some error in close ${error}`.red);
                } else {
                    resolve(users);
                    console.log(`Result Table Users ${JSON.stringify(users)}`.green);
                }
            });
        });
    }

    static async loginUser({ login, password, username }: LoginParams) {
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
                                code: 400,
                                isError: true,
                                message: `Error in registration: ${err}`,
                            };
                            console.log(`Error in registration: ${err.message}`.red)
                            reject(errorMessage);
                        } else {
                            console.log('Registration was succeed'.green);
                            resolve({
                                code: 200,
                                isError: false,
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
