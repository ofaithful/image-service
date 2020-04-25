const { history } = require('../database')

module.exports.getAll = async (req, res) => {
  const { userid } = req.params
  try {
    const data = await history.find({ user: userid })
    return res.json({ history: data })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}

module.exports.add = async (req, res) => {
  const { userid, query } = req.body
  try {
    const data = await history.insert({ user: userid, query: query, date: Date.now() })
    return res.json({ addedToHistory: data.query })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}