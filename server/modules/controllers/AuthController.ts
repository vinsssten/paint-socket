import { NextFunction, Request, Response } from "express";
import DatabaseController from "./DatabaseController";

interface AuthParams {
    req: Request,
    res: Response,
    next: NextFunction
}

export default class AuthController {
    database: DatabaseController

    constructor () {
        this.database = new DatabaseController();
    }

    async registration (req: Request, res: Response, next: NextFunction) {
        
    }

    async login (req: Request, res: Response, next: NextFunction) {
        
    }

    async logout (req: Request, res: Response, next: NextFunction) {
        
    }
     
    async refresh (req: Request, res: Response, next: NextFunction) {
        
    }

    async test (req: Request, res: Response, next: NextFunction) {
       
    }

    static errorHandler (err: any, res: Response) {

    }
};
