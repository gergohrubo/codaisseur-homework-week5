const Sequelize = require('sequelize')
const db = require('../sequelize-rest')

const Movie = db.define('movie', {
  title: Sequelize.TEXT,
  yearOfRelease: Sequelize.INTEGER,
  synopsis: Sequelize.TEXT
}, {
  timestamps: false
})

module.exports = Movie