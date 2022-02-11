import { Color } from 'colors';
import { NextFunction, Request, Response } from 'express';
import ApiError from '../exceptions/ApiError';
import TokenService from '../service/TokenService';

var colors: Color = require('colors');

function AuthMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiError.UnauthorizeError());
        }

        const accessToken = authHeader?.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizeError());
        }

        const tokenDataPayload = TokenService.validateAccessToken(accessToken);
        if (!tokenDataPayload) {
            return next(ApiError.UnauthorizeError());
        }

        //FIXME: Разобраться почему компилятор ругается на эту строку
        // req.user = tokenDataPayload;
        next();
    } catch (error) {
        next(error);
    }
}

export default AuthMiddleware;
