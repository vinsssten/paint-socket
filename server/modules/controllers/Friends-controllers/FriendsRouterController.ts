import { NextFunction, Request, Response } from "express";
import TokenService from "../../service/TokenService";

const tokenService = new TokenService();

class FriendsRouterController {
    getFriendsList (req: Request, res: Response, next: NextFunction) {
        const accessToken = tokenService.getTokenFromRequest(req);
    }

    addFriend (req: Request, res: Response, next: NextFunction) {
        const accessToken = tokenService.getTokenFromRequest(req);
    }
}

export default FriendsRouterController