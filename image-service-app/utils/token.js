const jwt = require('jsonwebtoken')
const privateKey = process.env.PRIVATE_TOKEN_KEY || 'secret'

module.exports.createToken = async (user) => {
  return await new Promise((resolve, reject) => {
    jwt.sign({ user }, privateKey, { expiresIn: '7d' }, (err, sign) => {
      if (err) {
        reject(err)
      }
      resolve(sign)
    })
  })
}

module.exports.verifyToken = async (token) => {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        reject(err)
      }
      resolve(decoded)
    })
  })
}

module.exports.getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1]
  }
}
