const bcrypt = require('bcryptjs')

module.exports.hash = async (value) => {
  const saltRounds = 10
  return await new Promise((resolve, reject) => {
    bcrypt.hash(value, saltRounds, (err, hash) => {
      if (err) {
        reject(err)
      }
      resolve(hash)
    })
  })
}

module.exports.compareWithHash = async (value, hashedValue) => {
  return await bcrypt.compare(value, hashedValue)
}