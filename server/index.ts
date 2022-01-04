import { Application } from "express";

const express = require('express')
const app: Application = express();
const path = require('path')
const port = 8080;
const fallback = require('express-history-api-fallback')

const root = path.join(__dirname, '../') + 'build';

app.use(express.static(root));

app.get('/api/authorization/', (req, res) => {
    res.cookie('refresh', '123123123123', {httpOnly: true});
    res.send();
})

app.get('/api/authentication', (req, res) => {
    res.send('Authentication')
})

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: root}, err => {
        if (err) {
            console.log('error send html', err)
        }
    })
})

app.listen(port, () => {
    console.log('Server started at http://localhost:8080')
})

module.exports = app