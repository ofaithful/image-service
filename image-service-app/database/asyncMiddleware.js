module.exports = (db) => {
  return {
    find: async (props) => {
      return await new Promise((resolve, reject) => {
        db.find(props, (err, doc) => {
          if (err) {
            reject(err)
          }
          resolve(doc)
        })
      })
    },
    findOne: async (props) => {
      return await new Promise((resolve, reject) => {
        db.findOne(props, (err, doc) => {
          if (err) {
            reject(err)
          }
          resolve(doc)
        })
      })
    },
    insert: async (props) => {
      return await new Promise((resolve, reject) => {
        db.insert(props, (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
      })
    },
    remove: async (props, multi = false) => {
      return await new Promise((resolve, reject) => {
        db.remove(props, { multi: multi }, (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
      })
    }
  }
}
