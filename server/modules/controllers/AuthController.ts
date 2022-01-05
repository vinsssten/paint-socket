import { NextFunction, Request, Response } from "express";
import LoginParams from "../../models/LoginParams";
import DatabaseController from "./DatabaseController";
import { RegistrationResolve } from "./ResolveTypes";

interface AuthParams {
    req: Request,
    res: Response,
    next: NextFunction
}

export default class AuthController {
    database: DatabaseController
    // private errorHandler: (error: any) => void

    constructor () {
        this.database = new DatabaseController();
        // this.errorHandler = this.errorThrow.bind(this);
    }

    async registration (req: Request, res: Response, next: NextFunction) {
        try {
            console.log(' Request to registration '.bgMagenta);
            const databaseResolve = await DatabaseController.registrateUser(req.body);
            res.send(databaseResolve);
        } catch (err) {
            res.send(err);
        }                                                                                                                     
    }

    async login (req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (err) {
            console.log(`Something went wrong: ${err}`.red)
        }
    }

    async logout (req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            console.log(`Something went wrong: ${err}`.red)
        }
    }
     
    async refresh (req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            console.log(`Something went wrong: ${err}`.red)
        }
    }

    async test (req: Request, res: Response, next: NextFunction) {
        try {
            const users = await DatabaseController.getUsersTable();
            res.send(users)
        } catch (err) {
            console.log(`Error in test request: \n ${err}`.red)
            res.send('Somenthing went wrong on server, try later...')
        }
    }

    // errorThrow (err: any) {
    //     throw new Error(err.red)
    // }
};
