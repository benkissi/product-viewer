import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import CollectionTypes from './collection-types'
import {
    addProducts,
    isLoading,
    addFail
} from './collection-actions'

import { selectProducts } from './collection-selectors'

import {getProducts} from '../../api'
import { normalize, generateId} from '../../utils/methods'

export function* fetchProducts () {
    try{
        yield put(isLoading(true))
        const data = yield getProducts()
        const normalizedProducts = normalize(data.products)
        yield put(addProducts(normalizedProducts))
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
    products[payload.id]=payload
    yield put(addProducts(products))
    yield put(isLoading(false))
}

function* deleteProduct ({payload}) {
    yield put(isLoading(true))
    const products = yield select(selectProducts)
    yield delete products[payload]
    const newProducts = yield Object.assign({}, products)
    yield put(addProducts(newProducts))
    yield put(isLoading(false))
}

function* saveEdits({payload}){
    try {
        const {name, price, id} = payload
        yield put(isLoading(true))
        const products = yield select(selectProducts)
        const item = products[id]
        if(!item) {
            throw new Error('item not found')
        }
        if(name) item.name = name
        if(price) {
            const newPrice = {
                id: generateId(),
                price,
                date: new Date()
            }
            item.prices.push(newPrice)
        }
        products[id] = item
        yield put(addProducts(products))
        yield put(isLoading(false))
    } catch (e) {
        yield put(isLoading(false))
        yield put(addFail(e))
    }

}

export function* addProductStart () {
    yield takeLatest(CollectionTypes.ADD_PRODUCTS_START, addProduct)
}

export function* fetchProductStart() {
    yield takeLatest(CollectionTypes.FETCH_PRODUCTS_START, fetchProducts)
}

export function* deleteProductStart() {
    yield takeLatest(CollectionTypes.DELETE_PRODUCT_START, deleteProduct)
}

export function* editStart() {
    yield takeLatest(CollectionTypes.EDIT_START, saveEdits)
}

export function* collectionSagas() {
    yield all([
        call(fetchProductStart),
        call(addProductStart),
        call(deleteProductStart),
        call(editStart)
    ])
}