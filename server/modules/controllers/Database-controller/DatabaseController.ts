import { Color } from 'colors';
import { Pool } from 'pg';
import { Database, sqlite3 } from 'sqlite3';

const sqlite: sqlite3 = require('sqlite3');
const color: Color = require('colors');

class DatabaseController {
    constructor() {}

    async connect(): Promise<Pool> {
        try {
            const pool = new Pool({
                connectionString: process.env.DATABASE_CONNECTION_STRING,
            });
            await pool.connect();

            return pool;
        } catch (error) {
            console.log(
                `SOMETHING WENT WRONG WHEN CONNECTING TO THE DATABASE: ${error}`.bgRed
                    .black,
            );
            throw Error(
                `SOMETHING WENT WRONG WHEN CONNECTING TO THE DATABASE: ${error}`.bgRed
                    .black,
            );
        }
    }
}

export default DatabaseController;
