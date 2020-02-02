import CollectionTypes from './collection-types'
import CollectionPage from '../../pages/collection/collection-page'

export const addProducts = (products) => ({
    type: CollectionTypes.ADD_PRODUCTS,
    payload: products
})

export const addFail = (error) => ({
    type: CollectionTypes.ADD_FAIL,
    payload: error
})

export const isLoading = (loadingState) => ({
    type: CollectionTypes.LOADING,
    payload: loadingState
})