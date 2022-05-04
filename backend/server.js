require("dotenv").config();

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use("/graphql", require('./route/graphQLRoute'))

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`listening on port ${port}\nhttp://localhost:${port}`))

module.exports = app