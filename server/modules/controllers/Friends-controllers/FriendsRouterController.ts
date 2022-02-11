import { NextFunction, Request, Response } from "express";
import TokenService from "../../service/TokenService";
import FriendsController from "./FriendsController";

const controller = new FriendsController();

class FriendsRouterController {
    async getFriendsList (req: Request, res: Response, next: NextFunction) {
        const accessToken = TokenService.getTokenFromRequest(req);
        const friendsList = await controller.getFriendsList();
    }

    addFriend (req: Request, res: Response, next: NextFunction) {
        const accessToken = TokenService.getTokenFromRequest(req);
    }
}

export default FriendsRouterController