const { Router } = require('express')
const Movie = require('./model')

const router = new Router()

router.get('/movie', (req, res, next) => {
  Movie.findAll()
    .then(movies => res.send(movies))
    .catch(next)
})

router.post('/movie', (req, res, next) => {
  Movie.create(req.body)
    .then(event => res.send(event))
})

router.get('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => res.send(movie))
    .catch(next)
})

router.put('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next)
})

router.delete('/movie/:id', (req, res, next) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next)
})

module.exports = router