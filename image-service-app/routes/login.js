const Router = require('express-promise-router')
const router = new Router()
const { user } = require('../controllers')

module.exports = router

router.post('/', async (req, res) => {
  user.login(req, res)
})