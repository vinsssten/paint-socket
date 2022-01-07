import { error } from "console";
import ApiError from "../exceptions/ApiError";
import TokenService, { Tokens } from "../service/TokenService";
import DatabaseGetter from "./DatabaseGetter";
import UsersTable from '../../models/UsersTable'

const bcrypt = require('bcrypt');
const uuid = require('uuid');

interface RegistrationBody {
    login: string;
    username: string;
    password: string;
}

class AuthController extends DatabaseGetter {
    private login = (user: UsersTable) => new Promise<Tokens>(async (resolve, reject) => {
        try {   
            const tokenService = new TokenService();
            const {accessToken, refreshToken} = await tokenService.generateTokens({id: user.id, login: user.login});
            console.log('user id', user)
            if (await tokenService.tokenSaveToDB(user.id, refreshToken)) {
                resolve({accessToken, refreshToken})
            }
        } catch (error) {
            reject(error)
        }
    })

    loginMain = ({login, password}: RegistrationBody) => new Promise<Tokens>(async (resolve, reject) => {
        try {   
            const db = await this.connect();

            const currentUser: UsersTable[] = await this.getRowByField('Users', 'login', login);
            if (currentUser.length === 0) {
                console.log('user with this login is was not found')
                reject(new ApiError('Incorrect login or password', 400))
            }
           
            if (await bcrypt.compare(password, currentUser[0].password)) {
                resolve(await this.login(currentUser[0]))
            } else (
                reject(new ApiError('Incorrect login or password', 400))
            )

            db.close()
        } catch (error) {
            reject(error)
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