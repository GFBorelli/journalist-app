import { all } from 'redux-saga/effects'

import news from './news/saga'

export default function* rootSaga() {
    return yield all([news])
}