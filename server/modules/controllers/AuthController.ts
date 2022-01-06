import { error } from "console";
import ApiError from "../exceptions/ApiError";
import DatabaseGetter from "./DatabaseGetter";

const bcrypt = require('bcrypt');
const uuid = require('uuid');

interface RegistrationBody {
    login: string;
    username: string;
    password: string;
}

class AuthController extends DatabaseGetter {
    login = ({login, password}: RegistrationBody) => new Promise<{access: string, refresh: string}>(async (resolve, reject) => {
        try {   
            const db = await this.connect();

            const currentUser = await this.getRowByField('Users', 'login', login);
            if (currentUser.length === 0) {
                console.log('user with this login is was not found')
                reject(new ApiError('Incorrect login or password', 400))
            }
            const currentUserPassword = currentUser[0].password;
            const currentHashedPassword = await bcrypt.hash(password, 3);

            if (currentUserPassword === currentHashedPassword) {

            } else (
                reject(new ApiError('Incorrect login or password', 400))
            )

            db.close()
        } catch (error) {
            
        }
    })

    registration = ({ login, username, password }: RegistrationBody) =>
        new Promise(async (resolve, reject) => {
            try {
                const isUniqueLogin = await this.isUniqueValue('Users', 'login', login);
                if (!isUniqueLogin) {
                    reject(
                        new ApiError(
                            'A user with this login already exists, try a different login',
                            400,
                        ),
                    );
                    return;
                }

                const db = await this.connect();
                const hashedPassword = await bcrypt.hash(password, 3);
                const id = uuid.v4();
                const sql = `INSERT INTO Users (id, login, username, password) VALUES ('${id}', '${login}', '${username}', '${hashedPassword}')`;
                db.serialize(() => {
                    db.run(sql, error => {
                        if (!error) {
                            resolve({
                                message: 'The user has been successfully registered',
                            });
                        } else {
                            console.log(error);
                            reject(new Error(`${error}`));
                        }
                    });
                });

                this.close(db);
            } catch (error) {
                reject(error);
            }
        });
}

export default AuthController