const Router = require('express-promise-router')
const router = new Router()
const securedRoute = require('../middleware/securedRoutes')
const { favorites } = require('../controllers')

module.exports = router

router.use(securedRoute)

router.get('/:userid', async (req, res) => {
  favorites.getAll(req, res)
})

router.post('/', async (req, res) => {
  favorites.add(req, res)
})

router.delete('/', async (req, res) => {
  favorites.remove(req, res)
})