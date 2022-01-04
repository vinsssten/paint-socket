import { Application } from "express"

const app: Application = require('./index.ts')

app.get('/api/auth/', (req, res) => {
    console.log('auth')
    res.status(200)
    res.send('hello, user!');
})