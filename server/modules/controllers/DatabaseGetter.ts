import { AllUsersTablesRows, UsersTablesNames } from "../../models/AllUsersTablesRows";
import UsersTable from "../../models/UsersTable";
import ApiError from "../exceptions/ApiError";
import DatabaseController from "./DatabaseController";

const bcrypt = require('bcrypt');
const uuid = require('uuid');

interface RegistrationBody {
    login: string
    username: string
    password: string
}

class DatabaseGetter extends DatabaseController {
    registration = ({login, username, password}: RegistrationBody) => new Promise(async (resolve, reject) => {
        try {
            const isUniqueLogin = await this.isUniqueValue('Users', 'login', login)
            if (!isUniqueLogin) {
                reject(new ApiError('A user with this login already exists, try a different login', 400));
                return
            }

            const db = await this.connect();
            const hashedPassword = await bcrypt.hash(password, 3);
            const id = uuid.v4();
            const sql = `INSERT INTO Users (id, login, username, password) VALUES ('${id}', '${login}', '${username}', '${hashedPassword}')`;
            db.serialize(() => {
                db.run(sql, (error) => {
                    if (!error) {
                        resolve({message: 'The user has been successfully registered'})
                    } else {
                        console.log(error)
                        reject(new Error(`${error}`))
                    }
                })
            })

            this.close(db);
        } catch (error) {
            reject(error)
        }
    })

    getRowByField = (tableName: UsersTablesNames, 
                        fieldName: string, 
                        value: string) => new Promise<any[]>(async (resolve, reject) => {
        try {
            const db = await this.connect();

            db.serialize(() => {
                const sqlString = `SELECT * FROM ${tableName} WHERE ${fieldName} = '${value}'`;
                db.all(sqlString, (err, row) => {
                    if (!err) {
                        resolve(row);
                    } else {
                        console.log(err);
                        reject(err);
                    }
                })
            })

            this.close(db);
        } catch (error) {
            reject(error)
        }
    })

    getUsersTable = () => new Promise<UsersTable[]>(async (resolve, reject) => {
        try {
            const db = await this.connect();

            db.serialize(() => {
                db.all('SELECT * FROM Users', (error, rows: UsersTable[]) => {
                    if (!error) {
                        console.log(`Data received: ${JSON.stringify(rows)}`)
                        resolve(rows);
                    } else {
                        console.log(`DATA RECEIVE ERROR ${error}`)
                        reject(error)
                    }
                })
            })

            this.close(db);
        } catch (error) {
            reject(error)
        }
    });

    isUniqueValue = (tableName: UsersTablesNames, 
                    fieldName: string, 
                    value: string) => new Promise<boolean>(async (resolve, reject) => {
        try {
            const checkValue = this.getRowByField(tableName, fieldName, value);
            if ((await checkValue).length > 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default DatabaseGetter