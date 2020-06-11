import { Alert } from 'react-native'
import { takeLatest, put, all } from 'redux-saga/effects'

import { createNewsSuccess, newsFailure, editNewsSuccess } from './actions'

export function* createNews({ payload }) {
    try {
        yield put(createNewsSuccess(payload))
        Alert.alert('Sucesso', 'Notícia publicada')

    } catch (error) {
        yield put(newsFailure())
        Alert.alert('Erro na publicação', 'Houve um erro na publicação, verifique os dados')
    }
}

export function* editNews({payload}) {
    try {
        yield put(editNewsSuccess(payload))
        Alert.alert('Sucesso', 'Notícia foi atualizada')

    } catch (error) {
        yield put(newsFailure())
        Alert.alert('Erro na atualização', 'Houve um erro na edição, verifique os dados')
    }
}

export default all([
    takeLatest('@news/CREATE_NEWS_REQUEST', createNews),
    takeLatest('@news/EDIT_NEWS_REQUEST', editNews)
])