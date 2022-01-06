import { NextFunction, Request, Response } from 'express';
import { Database } from 'sqlite3';
import ApiError from '../exceptions/ApiError';
import DatabaseController from './DatabaseController';
import DatabaseGetter from './DatabaseGetter';

interface AuthParams {
    req: Request;
    res: Response;
    next: NextFunction;
}

type DB = Database | PromiseLike<Database>;

export default class AuthController {
    // database: DatabaseController;

    constructor() {
        // this.database = new DatabaseController();
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const registrationMessage = await new DatabaseGetter().registration(req.body);
            res.send(registrationMessage);
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
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
            const usersTableData = await new DatabaseGetter().getUsersTable();
            res.send(usersTableData);
        } catch (error) {
            next(error);
        }
    }
}
