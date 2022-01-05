import { Router } from "express";
import AuthController from "../controllers/AuthController";

const apiRouter = Router();

const authController = new AuthController();

apiRouter.post('/registration');
apiRouter.post('/login');
apiRouter.post('/logout');
apiRouter.post('/refresh');
apiRouter.get('/test', authController.test);

export default apiRouter