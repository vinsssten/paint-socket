import { NextFunction, Request, Response } from "express";
import { Database } from "sqlite3";
import ApiError from "../exceptions/ApiError";
import DatabaseController from "./DatabaseController";

interface AuthParams {
    req: Request,
    res: Response,
    next: NextFunction
}

type DB = Database | PromiseLike<Database>;

export default class AuthController {
    // database: DatabaseController;

    constructor () {
        // this.database = new DatabaseController();
    }

    async registration (req: Request, res: Response, next: NextFunction) {
        try {
            const db =  await new DatabaseController().connect();
            
        } catch (error) {
            next(error)
        }
    }

    async login (req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async logout (req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
     
    async refresh (req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async test (req: Request, res: Response, next: NextFunction) {
       try {
            
        } catch (error) {
            next(error)
        }
    }

    static errorHandler (err: ApiError | Error | unknown, res?: Response) {
        if (err instanceof ApiError) {
            console.log('errorHandler')
            throw new ApiError(err.message, err.code)
        } else {
            throw Error(JSON.stringify(err));
        }
    }
};
