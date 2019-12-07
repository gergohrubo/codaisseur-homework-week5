const { Router } = require('express')
const { Movie } = require('../sequelize-rest')

const router = new Router()

router.get('/movie', (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0
  Movie.findAndCountAll({ limit, offset })
    .then(movies => res.send({ data: movies.rows, total: movies.count }))
    .catch(next)
})

router.post('/movie', (req, res, next) => {
  Movie.create(req.body)
    .then(event => res.send(event))
    .catch(next)
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