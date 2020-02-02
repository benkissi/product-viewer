import React from 'react'
import {
    Wrapper
} from './product-style'

const Product = prop => {
    return (
        <Wrapper>
            <div>{prop.product.name}</div>
        </Wrapper>
    )
}

export default Product