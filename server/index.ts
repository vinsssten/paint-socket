import { Color } from "colors";
import { Application } from "express";
import errorMiddleware from "./modules/middlewares/ErrorMiddleware";
import apiRouter from "./modules/route/apiRouter";

const express = require('express')
const app: Application = express();
const path = require('path')
var colors: Color = require('colors');

const port = 8080;
const root = path.join(__dirname, '../') + 'build';

app.use(express.static(root));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: root}, err => {
        if (err) {
            console.log('error send html', err)
        }
    })
})

app.listen(port, () => {
    console.log('Server started at http://localhost:8080'.rainbow)
})


module.exports = app