import produce from 'immer'

const INITIAL_STATE = {
    news: [],
}

export default function news(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@news/CREATE_NEWS_SUCCESS':
                draft.news = [...state.news, action.payload]
                break

            default:
                return state
        }
    })
}