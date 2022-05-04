const GET_ANIME_LIST = `query Page($page: Int) {
    Page(page: $page, perPage: 50) {
        media {
            title {
                english
                native
            }
            coverImage {
                large
            }
            genres
            popularity
            isAdult
        }
    }
}`

module.exports.GET_ANIME_LIST = GET_ANIME_LIST