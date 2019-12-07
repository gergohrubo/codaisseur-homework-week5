const Sequelize = require('sequelize')
const db = require('../sequelize-rest')

const Movie = db.define('movie', {
  title: Sequelize.STRING,
  yearOfRelease: Sequelize.NUMBER,
  synopsis: Sequelize.STRING
}, {
  timestamps: false
})

module.exports = Movie