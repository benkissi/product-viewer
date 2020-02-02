import { all, call } from 'redux-saga/effects'

import {collectionSagas} from './collection/collection-saga'

export default function* rootSaga() {
    yield all([
        call(collectionSagas)
    ])
}