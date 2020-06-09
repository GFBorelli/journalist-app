import { Alert } from 'react-native'
import { takeLatest, put, all } from 'redux-saga/effects'

import { updateNewsSuccess, updateNewsFailure } from './actions'

export function* updateNews({ payload }) {
    try {
        yield put(updateNewsSuccess(payload))
        Alert.alert('Sucesso', 'Notícia atualizada')

    } catch (erro) {
        yield put(updateNewsFailure())
        Alert.alert('Erro na atualização', 'Houve um erro na atualização, verifique os dados')
    }
}

export default all([
    takeLatest('@news/UPDATE_NEWS_REQUEST', updateNews)
])