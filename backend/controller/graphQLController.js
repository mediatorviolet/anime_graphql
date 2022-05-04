const axios = require("axios")
const { GET_ANIME_LIST } = require("../schema/schema")

class GraphQLController {
    async getAllAnime(req, res, next) {
        let page = req.body.page

        let data = await axios.post(process.env["API_URL"], {
                query: GET_ANIME_LIST,
                variables: {
                    page: page
                }
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        return res.status(200).send(data.data.data.Page.media)
    }
}

module.exports = new GraphQLController()