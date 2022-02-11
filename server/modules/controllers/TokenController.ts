import { Client, Pool } from "pg";

class TokenController {
    async saveInDB (connection: Pool | Client, id: string, refreshToken: string) {
        try {
            const sql = `INSERT INTO public."Sessions" (id, refresh_token) VALUES ('${id}', '${refreshToken}')`;
            await connection.query(sql);

            return true
        } catch (error) {
            throw error
        }
    }

    async refreshInDB () {

    }

    async removeFromDB () {

    }

}

export default TokenController