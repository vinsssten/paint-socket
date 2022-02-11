import { NextFunction, Request, Response } from "express";
import TokenService from "../../service/TokenService";
import FriendsController from "./FriendsController";

const controller = new FriendsController();

class FriendsRouterController {
    async getFriendsList (req: Request, res: Response, next: NextFunction) {
        
    }

    addFriend (req: Request, res: Response, next: NextFunction) {
        
    }
}

export default FriendsRouterController