import React, {useEffect} from 'react'
import Product from '../../components/product/product.jsx'
import { connect } from 'react-redux'

import {
    fetchProductStart
} from '../../redux/collection/collection-actions'

import {
    Wrapper,
    Header
} from './collection-styles'

const CollectionPage = (props) => {
    const {fetchProducts, products} = props
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    
    return(
        <Wrapper>
            <Header>
                <div>Name</div>
                <div>Price</div>
            </Header>

            {
                products.map(item => <Product product={item} key={item.id}/>)
            }
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    products: state.collection.products
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProductStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)