import { AllUsersTablesRows, UsersTablesNames } from "../../models/AllUsersTablesRows";
import UsersTable from "../../models/UsersTable";
import ApiError from "../exceptions/ApiError";
import DatabaseController from "./DatabaseController";

class DatabaseGetter extends DatabaseController {
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
    })

    getRowByField = (tableName: UsersTablesNames, 
                     fieldName: string, 
                     value: string) => new Promise(async (resolve, reject) => {
        try {
            const db = await this.connect();

            db.serialize(() => {
                const sqlString = `SELECT * FROM ${tableName} WHERE ${fieldName} = '${value}'`;
                console.log('sqlString', sqlString);

                db.all(sqlString, (err, row) => {
                    if (!err) {
                        console.log(row)
                        resolve(row[0]);
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
}

export default DatabaseGetter