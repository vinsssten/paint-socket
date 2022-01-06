import { Color } from "colors"
import { Database, sqlite3 } from "sqlite3"

const sqlite: sqlite3 = require('sqlite3')
const color: Color = require('colors')

class DatabaseController {
    constructor () {
        
    }

    connect = () => new Promise<Database> ((resolve, reject) => { 
        const database: Database = new sqlite.Database('../db/Paint.sqlite3', (err) => {
            if (!err) {
                console.log('DATABASE OPENED'.bgGreen.black);
                resolve(database);
            } else {
                console.log(`DATABASE COULDNT BE OPEN: ${JSON.stringify(err)}`.bgRed.black);
                reject(new Error(`Error in connect to database: ${err}`));
            }
        })
    })
}

export default DatabaseController