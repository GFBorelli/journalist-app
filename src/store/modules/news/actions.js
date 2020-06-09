export function createNewsRequest(news) {
    return {
        type: '@news/CREATE_NEWS_REQUEST',
        payload: news
    }
}

export function createNewsSuccess(news) {
    return {
        type: '@news/CREATE_NEWS_SUCCESS',
        payload: news
    }
}

export function createNewsFailure() {
    return {
        type: '@news/CREATE_NEWS_FAILURE'
    }
}