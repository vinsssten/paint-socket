import { Application } from "express";

const express = require('express')
const app: Application = express();
const path = require('path')
const port = 8080;
const fallback = require('express-history-api-fallback')

const root = path.join(__dirname, '../') + 'build';

app.use(express.static(root));
app.use(fallback('index.html', { root }), (req, res, next) => next())

app.listen(port, () => {
    console.log('Server started at http://localhost:8080')
})

module.exports = app