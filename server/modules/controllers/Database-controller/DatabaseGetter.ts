import { Pool, QueryResult, Client } from 'pg';
import { UsersTablesNames } from '../../../models/AllUsersTablesRows';
import UsersTable from '../../../models/UsersTable';
import DatabaseController from './DatabaseController';

class DatabaseGetter extends DatabaseController {
    async getRowByField (connection: Pool | Client, tableName: UsersTablesNames, fieldName: string, value: string): Promise<any[]>{
        try {
            const query = `SELECT * FROM public."${tableName}" WHERE ${fieldName} = '${value}'`;
            const request = await connection.query(query);

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

    async isUniqueValue (connection: Pool | Client, tableName: UsersTablesNames, fieldName: string, value: string) {
        try {
            const rows = await this.getRowByField(connection, tableName, fieldName, value);
            if (rows.length > 0) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw error
        }
    }
}

export default DatabaseGetter;
