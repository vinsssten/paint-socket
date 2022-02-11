import { NextFunction, Request, Response } from 'express';

interface MiddlewareParameters {
    req: Request;
    res: Response;
    next: NextFunction;
}

export default MiddlewareParameters;
