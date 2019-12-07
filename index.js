const express = require('express')
const bodyParser = require('body-parser')
const db = require('./sequelize-rest.js')
const movieRouter = require('./movie/router')
const app = express()
const port = process.env.PORT || 4000

const bodyparserMiddleware = bodyParser.json()

app.use(bodyparserMiddleware)
app.use(movieRouter)

app.listen(port, () => console.log(`server listening on port ${port}`))