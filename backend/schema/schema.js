const GET_ANIME_LIST = `query Page($page: Int) {
    Page(page: $page, perPage: 50) {
        media {
            id
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
            description
            duration
            episodes
            startDate {
                year
                month
                day
            }
        }
    }
}`

module.exports.GET_ANIME_LIST = GET_ANIME_LIST