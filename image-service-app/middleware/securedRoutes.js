const { getTokenFromHeader, verifyToken } = require('../utils/token')

module.exports = async (req, res, next) => {
  const token = getTokenFromHeader(req)
  if (!token) {
    return res.sendStatus(401)
  }
  try {
    await verifyToken(token)
    next()
  } catch (err) {
    console.log(err)
    res.sendStatus(401)
  }
}