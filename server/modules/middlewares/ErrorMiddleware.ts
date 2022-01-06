import { Color } from 'colors';
import { NextFunction, Request, Response } from 'express';
import ApiError from '../exceptions/ApiError';

var colors: Color = require('colors');

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(`${err}`.red);
    if (err instanceof ApiError) {
        console.log('Instance ApiError'.yellow);
        return res.status(err.code).json({ message: err.message, errors: err.error });
    }
    console.log('No Instance'.yellow);
    return res.status(500).json({ message: 'Something broke!' });
}

export default errorMiddleware;
