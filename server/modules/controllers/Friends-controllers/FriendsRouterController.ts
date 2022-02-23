import { NextFunction, Request, Response } from 'express';
import UsersTable from '../../../models/UsersTable';
import ApiError from '../../exceptions/ApiError';
import TokenService from '../../service/TokenService';
import FriendsController from './FriendsController';

const controller = new FriendsController();

class FriendsRouterController {
    async getFriendsList(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.user.id;
            const friendsList = await controller.getFriendsList(id);

            res.send(friendsList);
        } catch (error) {
            next(error);
        }
    }

    async findFriend(req: Request, res: Response, next: NextFunction) {
        try {
            const searchedName: string = req.body.username;
            const id = req.user.id;
            console.log('Search name', searchedName);

            if (!searchedName) {
                throw ApiError.BadRequest('An empty search query is presented');
            }

            const usersList: UsersTable[] = await controller.findFriends(
                searchedName,
                id,
            );
            res.send(usersList);
        } catch (error) {
            next(error);
        }
    }
}

export default FriendsRouterController;
