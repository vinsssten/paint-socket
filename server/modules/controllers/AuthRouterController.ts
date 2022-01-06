import { NextFunction, Request, Response } from 'express';
import { Database } from 'sqlite3';
import TokenService from '../service/TokenService';
import AuthController from './AuthController';

interface AuthParams {
    req: Request;
    res: Response;
    next: NextFunction;
}

interface Tokens {
    access: string, 
    refresh: string
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
            const {access, refresh}: Tokens = await new AuthController().login(req.body);
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
