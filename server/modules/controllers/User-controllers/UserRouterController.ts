import { NextFunction, Request, Response } from "express";
import UserController from "./UserController";

const controller = new UserController();

class UserRouterController {
    async getSelfProfile (req: Request, res: Response, next: NextFunction) {
        try {
            const access = req.headers.authorization?.split(' ')[1]; 
            if (access) {
                const profile = await controller.getSelfProfile(access);
                res.send(profile);
            }
        } catch (error) {
            next(error);
        }
    }
}

export default UserRouterController