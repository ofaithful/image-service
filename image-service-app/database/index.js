const Nedb = require('nedb')
const asyncDbMiddleware = require('./asyncMiddleware')

const db = Object.create({}, {
  users: {
    value: new Nedb({ filename: 'database/users.db', autoload: true }),
    enumerable: true
  },
  history: {
    value: new Nedb({ filename: 'database/history.db', autoload: true }),
    enumerable: true
  },
  favorites: {
    value: new Nedb({ filename: 'database/favorites.db', autoload: true }),
    enumerable: true
  }
})

const asyncDB = {}

for (let collection in db) {
  asyncDB[collection] = asyncDbMiddleware(db[collection])
}

module.exports = asyncDB

