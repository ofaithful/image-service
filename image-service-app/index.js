const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mountRoutes = require('./routes')
const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
mountRoutes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

