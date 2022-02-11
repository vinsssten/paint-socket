import { Router } from 'express';
import AuthRouterController from '../controllers/Auth-controllers/AuthRouterController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import RegistrationMiddleware from '../middlewares/RegistrationMiddleware';

const apiRouter = Router();

const authController = new AuthRouterController();

apiRouter.post('/registration', RegistrationMiddleware, authController.registration);
apiRouter.post('/login', authController.login);
// apiRouter.post('/logout', authController.logout);
// apiRouter.post('/refresh', authController.refresh);
// apiRouter.post('/validate', AuthMiddleware, authController.validate);
// apiRouter.get('/test', authController.test);

export default apiRouter;
