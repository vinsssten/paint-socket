import { NextFunction, Request, Response } from 'express';
import { Database } from 'sqlite3';
import TokenService, { Tokens } from '../service/TokenService';
import AuthController from './AuthController';

interface AuthParams {
    req: Request;
    res: Response;
    next: NextFunction;
}

type DB = Database | PromiseLike<Database>;

export default class AuthRouterController {

    constructor() {
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const registrationMessage = await new AuthController().registration(req.body);
            res.send(registrationMessage);
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {accessToken, refreshToken}: Tokens = await new AuthController().loginMain(req.body);
            res.cookie('refresh', refreshToken, {maxAge: 1000 * 30 * 24 * 60 * 60, httpOnly: true, secure: true})
            res.send({accessToken: accessToken});
        } catch (error) {
            next(error);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async test(req: Request, res: Response, next: NextFunction) {
        try {
            // const qwe = await new TokenService().tokenSaveToDB('4', 'qwewe');
            // console.log('qwe', qwe)
            // res.send(qwe)
            const usersTableData = await new AuthController().getUsersTable();
            res.send(usersTableData);
        } catch (error) {
            next(error);
        }
    }
}
