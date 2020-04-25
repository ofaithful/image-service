const { favorites } = require('../database')
const { map } = require('lodash')

module.exports.getAll = async (req, res) => {
  const { userid } = req.params
  try {
    const data = await favorites.find({ user: userid })
    const favoritesPhotos = map(data, (item) => item.photo)
    return res.json({ favorites: favoritesPhotos })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}

module.exports.add = async (req, res) => {
  const { userid, photoid } = req.body
  try {
    const data = await favorites.insert({ user: userid, photo: photoid })
    return res.json({ addedToFavorites: photoid })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}

module.exports.remove = async (req, res) => {
  const { userid, photoid } = req.body
  try {
    const data = await favorites.remove({ user: userid, photo: photoid })

    if (data === 1) {
      return res.json({ removedFromFavorites: photoid })
    } else {
      return res.json({ info: data })
    }
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}