import { NextFunction, Request, Response } from "express";
import DatabaseController from "../../models/DatabaseController";

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

    async login () {

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
};
