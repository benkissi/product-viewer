import CollectionTypes from './collection-types'

export const addProducts = (products) => ({
    type: CollectionTypes.ADD_PRODUCTS,
    payload: products
})

export const fetchProductStart = () => ({
    type: CollectionTypes.FETCH_PRODUCTS_START
})

export const addProductStart = () => ({
    type: CollectionTypes.ADD_PRODUCTS_START
})

export const addFail = (error) => ({
    type: CollectionTypes.ADD_FAIL,
    payload: error
})

export const isLoading = (loadingState) => ({
    type: CollectionTypes.LOADING,
    payload: loadingState
})