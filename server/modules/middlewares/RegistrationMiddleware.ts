import { NextFunction, Request, Response } from 'express';
import ApiError from '../exceptions/ApiError';

function RegistrationMiddleware(req: Request, res: Response, next: NextFunction) {
    const errors: string[] = [];
    let { login, username, password } = req.body;

    login = login.trim();
    username = username.trim();

    if (login.length < 5) {
        errors.push('The login must be at least 5 characters long');
    }
    if (username.length < 4) {
        errors.push('The username must be at least 5 characters long');
    }
    if (password.length < 6) {
        errors.push('The password must be at least 5 characters long');
    }

    if (login.includes(' ', 0)) {
        errors.push('The login must not contain spaces');
    }
    if (password.includes(' ', 0)) {
        errors.push('The password must not contain spaces');
    }

    if (errors.length > 0) {
        next(ApiError.BadRequest('Incorrect data for registration', errors));
    } else {
        req.body.login = login;
        req.body.username = username;
        req.body.password = password;
        next();
    }
}

export default RegistrationMiddleware;
