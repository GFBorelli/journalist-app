import produce from 'immer'

const INITIAL_STATE = {
    news: [],
}

export default function news(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@news/CREATE_NEWS_SUCCESS':
                draft.news = [action.payload, ...state.news]
                break

            case '@news/REMOVE':
                const { id } = action.id
                const newsIndex = draft.news.findIndex(news => news.id === id)

                if (newsIndex >= 0) {
                    draft.news.splice(newsIndex, 1)
                }
                break

            default:
                return state
        }
    })
}