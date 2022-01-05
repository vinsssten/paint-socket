import { NextFunction, Request, Response } from "express";
import LoginParams from "../../models/LoginParams";
import DatabaseController from "./DatabaseController";
import DatabaseGetterController from "./DatabaseGetterController";
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
            const databaseResolve = await DatabaseController.registrateUser(req.body)
                .catch((err: RegistrationResolve) => AuthController.errorHandler(err, res));
            res.send(databaseResolve);                                                       
        } catch (err) {
            res.status(500).json({message: `Server error ${err}`})
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
            const users = await DatabaseGetterController.getUsersTable()
                .catch((err: RegistrationResolve) => AuthController.errorHandler(err, res));;
            res.send(users)
        } catch (err) {
            res.status(500).json({message: `Server error ${err}`})
        }
    }

    static errorHandler (err: any, res: Response) {
        res.status(err.code).json({message: err.message});
    }
};
