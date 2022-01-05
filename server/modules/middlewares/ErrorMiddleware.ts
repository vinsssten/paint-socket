import { NextFunction } from "express";
import ApiError from "../exceptions/ApiError";

// var colors = require('colors');

function errorMiddleware (err: any, req: Request, res: any, next: NextFunction) {
    console.log(`${err}`.red);
    if (err instanceof ApiError) {
        return res.status(err.code).json({message: err.message, errors: err.error});
    }
    return res.status(500).json({message: 'Server error'});
}

export default errorMiddleware