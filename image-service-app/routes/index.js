const user = require('./user')
const login = require('./login')
const history = require('./history')
const favorites = require('./favorites')
const verifyToken = require('./verifyToken')

module.exports = (app) => {
  app.use('/users', user)
  app.use('/login', login)
  app.use('/favorites', favorites)
  app.use('/history', history)
  app.use('/verify-token', verifyToken)
}