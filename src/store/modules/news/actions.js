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

export function newsFailure() {
    return {
        type: '@news/NEWS_FAILURE'
    }
}

export function editNewsRequest(news) {
    return {
        type: '@news/EDIT_NEWS_REQUEST',
        payload: news
    }
}

export function editNewsSuccess(news) {
    return {
        type: '@news/EDIT_NEWS_SUCCESS',
        payload: news
    }
}

export function removeNews(id) {
    return {
        type: '@news/REMOVE',
        id
    }
}