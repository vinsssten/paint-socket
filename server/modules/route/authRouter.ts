import { Router } from 'express';
import AuthRouterController from '../controllers/Auth-controllers/AuthRouterController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const apiRouter = Router();

const authController = new AuthRouterController();

apiRouter.post('/registration', authController.registration);
apiRouter.post('/login', authController.login);
apiRouter.post('/logout', authController.logout);
apiRouter.post('/refresh', authController.refresh);
apiRouter.get('/test', AuthMiddleware, authController.test);

export default apiRouter;