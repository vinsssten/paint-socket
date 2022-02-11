import { Client, Pool } from "pg";
import DatabaseGetter from "./Database-controller/DatabaseGetter";
import ApiError from '../exceptions/ApiError';

class TokenController {
    async saveInDB (connection: Pool | Client, id: string, refreshToken: string) {
        try {
            const db = new DatabaseGetter();

            if (await db.isUniqueValue(connection, 'Sessions', 'id', id)) {
                const sql = `INSERT INTO public."Sessions" (id, refresh_token) VALUES ('${id}', '${refreshToken}')`;
                await connection.query(sql);
            } else {
                await this.refreshInDB(connection, id, refreshToken);
            }

            return true
        } catch (error) {
            throw error
        }
    }

    async refreshInDB (connection: Pool | Client, id: string, refreshToken: string) {
        try {
            const sql = `UPDATE public."Sessions" SET refresh_token='${refreshToken}' WHERE id='${id}';`
            await connection.query(sql)
            return true
        } catch (error) {
            throw error
        }
    }

    async removeFromDB (connection: Pool | Client, refreshToken: string) {
        try {
            const sql = `DELETE FROM public."Sessions" WHERE refresh_token='${refreshToken}'`
            const response = await connection.query(sql);
            
            // console.log('row count', response.rowCount)
            // if (response.rowCount === 0) {
            //     throw ApiError.BadRequest('Something went wrong in the process of unlogging');
            // }

            return true;
        } catch (error) {
            throw error
        }
    }

}

export default TokenController