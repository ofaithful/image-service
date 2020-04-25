const Router = require('express-promise-router')
const router = new Router()
const securedRoute = require('../middleware/securedRoutes')
const { history } = require('../controllers')

module.exports = router

router.use(securedRoute)

router.get('/:userid', async (req, res) => {
  history.getAll(req, res)
})

router.post('/', async (req, res) => {
  history.add(req, res)
})