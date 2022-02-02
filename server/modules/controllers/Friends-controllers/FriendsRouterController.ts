import { NextFunction, Request, Response } from 'express';
import TokenService from '../../service/TokenService';
import FriendsController from './FriendsController';

const tokenService = new TokenService();
const controller = new FriendsController();

class FriendsRouterController {
    async getFriendsList(req: Request, res: Response, next: NextFunction) {
        const accessToken = tokenService.getTokenFromRequest(req);
        const friendsList = await controller.getFriendsList();
    }

    addFriend(req: Request, res: Response, next: NextFunction) {
        const accessToken = tokenService.getTokenFromRequest(req);
    }
}

export default FriendsRouterController;
