import { NextFunction, Request, Response } from 'express';
import { Client } from 'pg'
import { Database } from 'sqlite3';
import ApiError from '../../exceptions/ApiError';
import TokenService, { Tokens } from '../../service/TokenService';
import AuthController from './AuthController';

interface AuthParams {
    req: Request;
    res: Response;
    next: NextFunction;
}

const controller = new AuthController();

type DB = Database | PromiseLike<Database>;

export default class AuthRouterController {
    constructor() {}

    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const registrationMessage = await new AuthController().registration(req.body);
            res.send(registrationMessage);
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { accessToken, refreshToken }: Tokens = await new AuthController().login(req.body.login, req.body.password);
            res.cookie('refreshToken', refreshToken, {
                maxAge: 1000 * 30 * 24 * 60 * 60,
                httpOnly: true,
            });
            res.send({ accessToken: accessToken });
        } catch (error) {
            next(error);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const logoutMessage = await new AuthController().logout(refreshToken);
            res.clearCookie('refreshToken');
            res.send(logoutMessage);
        } catch (error) {
            next(error);
        }
    }

    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedToken = TokenService.getTokenFromRequest(req);
            const isValidAccess = await controller.isValidToken(validatedToken);

            if (isValidAccess) {
                res.send({accessToken: validatedToken})
            } else {
                throw ApiError.UnauthorizeError();
            }
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const newTokens = await controller.refresh(req.cookies.refreshToken);

            res.clearCookie('refreshToken');
            res.cookie('refreshToken', newTokens.refreshToken, {
                maxAge: 1000 * 30 * 24 * 60 * 60,
                httpOnly: true,
            });
            res.send({ accessToken: newTokens.accessToken });
        } catch (error) {
            next(error);
        }
    }

    async test(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Hello world!');
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}
