import CollectionTypes from './collection-types'

const INITIAL_STATE = {
    products: [],
    error: null,
    loading: false
}

const collectionReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CollectionTypes.ADD_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        case CollectionTypes.LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        case CollectionTypes.ADD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }   
}

export default collectionReducer