const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)


db.sync()
  .then(log => console.log('database created'))
  // .then(() => Movie.truncate())
  // .then(() => Promise.all([
  //   Movie.create({ title: 'Star Wars IV', yearOfRelease: 1977, synopsis: 'The best Star Wars movie' }),
  //   Movie.create({ title: 'Star Wars V', yearOfRelease: 1980, synopsis: 'The second best Star Wars movie' }),
  //   Movie.create({ title: 'Star Wars VI', yearOfRelease: 1983, synopsis: 'The third best Star Wars movie' })
  // ]))
  .then(() => console.log('Three movies added'))
  .catch(console.error)

module.exports = db