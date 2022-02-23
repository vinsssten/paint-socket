import { Router } from 'express';
import FriendsRouterController from '../controllers/Friends-controllers/FriendsRouterController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const friendsRouter = Router();

const controller = new FriendsRouterController();

friendsRouter.get('/getfriends', AuthMiddleware, controller.getFriendsList);
friendsRouter.post('/findfriend', AuthMiddleware, controller.findFriend);

export default friendsRouter;
