import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import CollectionTypes from './collection-types'
import {
    addProducts,
    isLoading,
    addFail
} from './collection-actions'

import { selectProducts } from './collection-selectors'

import {getProducts} from '../../api'
import {getObjectArray, getLatestPrice} from '../../utils/methods'

export function* fetchProducts () {
    try{
        yield put(isLoading(true))
        const data = yield getProducts()
        const products = getObjectArray(data.products)
        yield put(addProducts(products))
        yield getLatestPrice(products[0].prices)
        yield put(isLoading(false))
    }catch(e){
        yield put(isLoading(false))
        yield put(addFail(e))
    }
    
}

function* addProduct ({payload}) {
    yield put(isLoading(true))
    yield console.log('add product')
    const products = yield select(selectProducts)
    products.unshift(payload)
    yield put(addProducts(products))
    yield put(isLoading(false))
}

export function* addProductStart () {
    yield takeLatest(CollectionTypes.ADD_PRODUCTS_START, addProduct)
}

export function* fetchProductStart() {
    yield takeLatest(CollectionTypes.FETCH_PRODUCTS_START, fetchProducts)
}

export function* collectionSagas() {
    yield all([
        call(fetchProductStart),
        call(addProductStart)
    ])
}