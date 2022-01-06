import { Router } from 'express';
import AuthRouterController from '../controllers/AuthRouterController';

const apiRouter = Router();

const authController = new AuthRouterController();

apiRouter.post('/registration', authController.registration);
apiRouter.post('/login', authController.login);
apiRouter.post('/logout', authController.logout);
apiRouter.post('/refresh', authController.refresh);
apiRouter.get('/test', authController.test);

export default apiRouter;
