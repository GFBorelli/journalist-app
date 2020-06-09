import { Alert } from 'react-native'
import { takeLatest, put, all } from 'redux-saga/effects'

import { createNewsSuccess, createNewsFailure } from './actions'

export function* createNews({ payload }) {
    try {
        yield put(createNewsSuccess(payload))
        Alert.alert('Sucesso', 'Notícia atualizada')

    } catch (erro) {
        yield put(createNewsFailure())
        Alert.alert('Erro na atualização', 'Houve um erro na atualização, verifique os dados')
    }
}

export default all([
    takeLatest('@news/CREATE_NEWS_REQUEST', createNews)
])