import { NextFunction, Request, Response } from 'express';
import UserController from './UserController';

const controller = new UserController();

class UserRouterController {
    async getSelfProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.user.id;
            const selfProfileData = await controller.getSelfProfile(id);

            res.send(selfProfileData);
        } catch (error) {
            next(error);
        }
    }
}

export default UserRouterController;
