import { Pool, QueryResult } from 'pg';
import { UsersTablesNames } from '../../../models/AllUsersTablesRows';
import UsersTable from '../../../models/UsersTable';
import DatabaseController from './DatabaseController';

class DatabaseGetter extends DatabaseController {
    async getRowByField (tableName: UsersTablesNames, fieldName: string, value: string): Promise<any[]>{
        try {
            const pool: Pool = await this.newConnect();

            const query = `SELECT * FROM public."${tableName}" WHERE ${fieldName} = '${value}'`;
            const request = await pool.query(query);

            return request.rows
        } catch (error) {
            console.log('local error', error)
            throw error
        }
    }


    // getUsersTable = () =>
    //     new Promise<UsersTable[]>(async (resolve, reject) => {
    //         try {
    //             const db = await this.connect();

    //             db.serialize(() => {
    //                 db.all('SELECT * FROM Users', (error, rows: UsersTable[]) => {
    //                     if (!error) {
    //                         console.log(`Data received: ${JSON.stringify(rows)}`);
    //                         resolve(rows);
    //                     } else {
    //                         console.log(`DATA RECEIVE ERROR ${error}`);
    //                         reject(error);
    //                     }
    //                 });
    //             });

    //             this.close(db);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });

    isUniqueValue = (tableName: UsersTablesNames, fieldName: string, value: string) =>
        new Promise<boolean>(async (resolve, reject) => {
            try {
                const checkValue = this.getRowByField(tableName, fieldName, value);
                if ((await checkValue).length > 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            } catch (error) {
                reject(error);
            }
        });
}

export default DatabaseGetter;
