import { Router } from 'express';
import UserController from '../controllers/User-controllerers/UserController';
import UserRouterController from '../controllers/User-controllerers/UserRouterController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const userApiRouter = Router();

const userController = new UserRouterController();

userApiRouter.get('/profile', AuthMiddleware, userController.getProfile);

export default userApiRouter;