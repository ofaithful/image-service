const { users } = require('../database')
const { hash, compareWithHash } = require('../utils/hash')
const { createToken } = require('../utils/token')

module.exports.register = async (req, res) => {
  const { username, password } = req.body

  const match = await users.findOne({ username: username })

  if (match) {
    return res.json({ message: 'username already exists' })
  }

  try {
    const hashedPassword = await hash(password)
    const newUser = await users.insert({ username: username, password: hashedPassword })
    res.json({ username: newUser.username, id: newUser._id })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}

module.exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await users.findOne({ username: username })

    if (!user) {
      return res.json({ message: 'no such user' })
    }

    const isPasswordsMatch = await compareWithHash(password, user.password)

    if (!isPasswordsMatch) {
      return res.json({ message: 'incorrect password' })
    }

    const token = await createToken(user)
    return res.json({ token: token })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}