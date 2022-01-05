import { error } from "console";
import { resolve } from "path/posix";
import UsersTable from "../../models/UsersTable";
import DatabaseController from "./DatabaseController";

class DatabaseGetterController extends DatabaseController {
    static async getUsersTable() {
        const db: any = await DatabaseController.databaseConnection().catch(console.log);

        try {
            let transactPromise = new Promise ((resolve, reject) =>{ 
                db.serialize(() => {
                    db.all('SELECT * FROM sers', (err: any, row: UsersTable[]) => {
                        if (err) {
                            reject(`Error in get users table: ${err}`);
                        } else {
                            resolve(row);
                        }
                    });
                });
                
                db.close((error: any) => {
                    if (error) {
                        throw new Error(`Some error in close ${error}`.red);
                    } else {
                        console.log(`Database closed`.bgGreen.black);
                    }
                });
            })

            const result = await transactPromise;
            console.log(`Test result ${JSON.stringify(result)}`.green);
            return result;
        } catch (err) {
            //Throw error to top-level catcher
            throw new Error(`${err}`);
        }
    }

    static async getValueByField (fieldName: string, value: string) {
        return new Promise(async (resolve, reject) => {
            const db: any = await DatabaseController.databaseConnection().catch(reject);

            let value: any = null;
            db.serialize(() => {
                
            });

            db.close((error: any) => {
                if (error) {
                    console.log(`Some error in close ${error}`.red);
                } else {
                    resolve(value);
                }
            });
        });
    }
}

export default DatabaseGetterController