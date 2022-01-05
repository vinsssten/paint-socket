import { Color } from 'colors';
import { Database, sqlite3 } from 'sqlite3'
import UsersTable from './UsersTable';

const sqlite: sqlite3 = require('sqlite3');
var colors: Color = require('colors');

class DatabaseController {
    protected static async databaseConnection () {
        console.log('Database connection...'.yellow)

        return await new Promise<Database>((resolve, reject) => {
            sqlite.verbose();
            const database = new sqlite.Database('../db/Paint.sqlite3', (err: any) => {
                if (!err) {
                    console.log(' DB CONNECTED! '.bgGreen.black)
                    resolve(database)
                } else {
                    reject(`Error in connection to db: ${err}`.red);
                }   
            });
        })
    }   

    static async getUsersTable () {
        return await new Promise(async (resolve, reject) => {
            const db: any = await DatabaseController.databaseConnection().catch(reject);
            
            let users: UsersTable[] | null = null;
            db.serialize(() => {
                db.all('SELECT * FROM Users', (err: any, row: UsersTable[]) => {
                    if (err) {
                        reject(`Error in get users table: ${err}`)
                    } else {
                        users = row;
                    } 
                })
                
            });
            
            
            db.close((error: any) => {
                if (error) {
                    console.log(`Some error in close ${error}`.red)
                } else {
                    resolve(users)
                    console.log(`Result Table Users ${JSON.stringify(users)}`.green);
                }
            })
        })
    }
}

export default DatabaseController