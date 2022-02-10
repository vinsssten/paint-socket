import { Color } from 'colors';
import { Pool } from 'pg';
import { Database, sqlite3 } from 'sqlite3';

const sqlite: sqlite3 = require('sqlite3');
const color: Color = require('colors');

class DatabaseController {
    constructor() {}

    async newConnect () {
        try {
            const pool = new Pool({connectionString: process.env.DATABASE_CONNECTION_STRING});
            await pool.connect();

            return pool
        } catch (error) {
            console.log(`SOMETHING WENT WRONG WHEN CONNECTING TO THE DATABASE: ${error}`.bgRed.black);
            throw Error(`SOMETHING WENT WRONG WHEN CONNECTING TO THE DATABASE: ${error}`.bgRed.black);
        }
        
    }

    connect = () =>
        new Promise<Database>((resolve, reject) => {
            const database: Database = new sqlite.Database('../db/Paint.sqlite3', err => {
                if (!err) {
                    resolve(database);
                } else {
                    console.log(
                        `DATABASE COULDNT BE OPEN: ${JSON.stringify(err)}`.bgRed.black,
                    );
                    reject(new Error(`Error in connect to database: ${err}`));
                }
            });
        });

    close = (database: Database) =>
        new Promise((resolve, reject) => {
            database.close(err => {
                if (!err) {
                } else {
                    console.log('ERROR IN CLOSE DATABASE'.bgRed.black);
                }
            });
        });
}

export default DatabaseController;
