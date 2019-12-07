const express = require('express')
const bodyParser = require('body-parser')
// const limitingMiddleware = require('./limitingMiddleware')
const app = express()
const port = 3000
let count = 0

const limitingMiddleware = function (req, res, next) {
  if (count < 5) {
    count++
    next()
  } else {
    res.status(429).send({ message: "You made more than 5 requests!" })
  }
}

const bodyparserMiddleware = bodyParser.json()

app.use(bodyparserMiddleware)
app.use(limitingMiddleware)

app.post('/messages', (req, res) => {
  if (!req.body.text) {
    res.status(400).send({ message: 'Please supply a text property in the body' })
  } else {
    console.log(req.body.text)
    res.json({ message: "Message received loud and clear" })
  }
})

app.listen(port, () => console.log(`Server listening on port ${port}`))