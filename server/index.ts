import { Color } from 'colors';
import { CorsOptions } from 'cors';
import { Application } from 'express';
import errorMiddleware from './modules/middlewares/ErrorMiddleware';
import apiRouter from './modules/route/authRouter';
import friendsRouter from './modules/route/friendsController';
import userApiRouter from './modules/route/userApiRouter';

//TODO: Вынести app.use`ы в отдельный файл
//FIXME: Пофиксить ошибку Session didnt found при логауте


//TODO: Разобраться с объявлением этого типа в отдельном файле
declare global {
    namespace Express {
        interface Request {
            user: any;
        }
    }
}

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
export const app: Application = express();
const path = require('path');
var colors: Color = require('colors');

const port = 8080;
const root = path.join(__dirname, '../') + 'build';

const corsConfig: CorsOptions = {
    credentials: true,
    origin: 'http://localhost:5000',
    // allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsConfig));
app.use(express.static(root));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', apiRouter);
app.use('/api/user', userApiRouter);
app.use('/api/friends', friendsRouter);

app.use(errorMiddleware);

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: root }, err => {
        if (err) {
            console.log('error send html', err);
        }
    });
});

app.listen(port, () => {
    console.log('Server started at http://localhost:8080'.rainbow);
});

module.exports = app;
