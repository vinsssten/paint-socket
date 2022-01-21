import { Router } from 'express';
import UserController from '../controllers/User-controllers/UserController';
import UserRouterController from '../controllers/User-controllers/UserRouterController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const userApiRouter = Router();

const userController = new UserRouterController();

userApiRouter.get('/selfprofile', AuthMiddleware, userController.getSelfProfile);

export default userApiRouter;
