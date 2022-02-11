import { Request } from 'express';
import { isUndefined } from 'util';
import DatabaseController from '../controllers/Database-controller/DatabaseController';
import DatabaseGetter from '../controllers/Database-controller/DatabaseGetter';
import ApiError from '../exceptions/ApiError';

const jwt = require('jsonwebtoken');
const colors = require('colors');
const dotenv = require('dotenv').config();

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface TokenPayload {
    id: string;
    login: string;
}

class TokenService {
    static generateTokens(id: string, login: string): Tokens {
        const payload: TokenPayload = { id: id, login: login };
        const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m',
        });
        const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d',
        });

        return { accessToken, refreshToken };
    }

    static getTokenFromRequest (req: Request): string | null {
        const authHead = req.headers.authorization;
        const authWordSplit = authHead?.split(' ');
        
        if (authWordSplit && authWordSplit?.length > 0 ) {
            if (authWordSplit[1] !== undefined) {
                return authWordSplit[1]
            }
        }

        return null
    }

    static validateAccessToken(token: string) : TokenPayload | null {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    static validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }
}

export default TokenService;
