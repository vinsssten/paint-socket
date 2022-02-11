import { Color } from 'colors';
import { NextFunction, Request, Response } from 'express';
import MiddlewareParameters from '../../models/MiddlewareParameters';
import ApiError from '../exceptions/ApiError';
import TokenService from '../service/TokenService';

var colors: Color = require('colors');

function AuthMiddleware({req, res, next}: MiddlewareParameters) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiError.UnauthorizeError());
        }

        const accessToken = authHeader?.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizeError());
        }

        const tokenDataPayload = new TokenService().validateAccessToken(accessToken);
        if (!tokenDataPayload) {
            return next(ApiError.UnauthorizeError());
        }

        req.user = tokenDataPayload;
        next();
    } catch (error) {
        next(error);
    }
}

export default AuthMiddleware;
