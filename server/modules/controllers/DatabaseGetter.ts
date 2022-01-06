import { Database } from "sqlite3";
import UsersTable from "../../models/UsersTable";
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
}

export default DatabaseGetter