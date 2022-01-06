import { Database } from "sqlite3";
import DatabaseController from "./DatabaseController";

class DatabaseGetter extends DatabaseController {
    getUsersTable = () => new Promise<Database>(async (resolve, reject) => {
        try {
            const db = this.connect();
        } catch (error) {
            
        }
    })
}