import UsersTable from "../../models/UsersTable";
import DatabaseController from "./DatabaseController";

class DatabaseGetterController extends DatabaseController {
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
}

export default DatabaseGetterController