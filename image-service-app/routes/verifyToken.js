const Router = require('express-promise-router')
const router = new Router()
const secureRoute = require('../middleware/securedRoutes')

module.exports = router

router.use(secureRoute)

router.get('/', async (req, res) => {
  res.sendStatus(200)
})