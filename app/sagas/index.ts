/*
 *
 * Root saga
 *
 */
import { all } from 'redux-saga/effects'

import globalSaga from './global'
import placesSaga from './places'

export default function* rootSaga() {
    yield all([
        ...globalSaga,
        ...placesSaga,
    ])
}