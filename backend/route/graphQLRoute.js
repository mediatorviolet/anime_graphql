const router = require("express").Router()
const GraphQLController = require("../controller/graphQLController")

router.post("/get-all-anime", GraphQLController.getAllAnime)

module.exports = router