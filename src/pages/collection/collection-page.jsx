import React, {useEffect} from 'react'
import Product from '../../components/product/product.jsx'
import {getProducts} from '../../api'

import {
    Wrapper,
    Header
} from './collection-styles'

import data from '../../utils/sampleData.json'
import {getObjectArray} from '../../utils/methods'

const CollectionPage = () => {
    useEffect(() => {
        getProducts()
    }, [])
    const sampleData = getObjectArray(data)
    return(
        <Wrapper>
            <Header>
                <div>Name</div>
                <div>Price</div>
            </Header>

            {
                sampleData.map(item => <Product product={item} key={item.id}/>)
            }
        </Wrapper>
    )
}

export default CollectionPage