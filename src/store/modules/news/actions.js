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

export function editNewsRequest() {
    return {
        type: '@news/EDIT_NEWS_REQUEST'
    }
}

export function removeNews(id) {
    return {
        type: '@news/REMOVE',
        id
    }
}