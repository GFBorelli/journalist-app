export function updateNewsRequest(news) {
    return {
        type: '@news/UPDATE_NEWS_REQUEST',
        payload: news
    }
}

export function updateNewsSuccess(news) {
    return {
        type: '@news/UPDATE_NEWS_SUCCESS',
        payload: news
    }
}

export function updateNewsFailure() {
    return {
        type: '@news/UPDATE_NEWS_FAILURE'
    }
}