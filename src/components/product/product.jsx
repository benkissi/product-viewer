import React from 'react'
import {
    Wrapper
} from './product-style'

import {getLatestPrice} from '../../utils/methods'

const Product = prop => {
    const getPrice = () => {
        const prices = prop.product.prices
        if(prices.length > 1){
            const latestPrice = getLatestPrice(prop.product.prices)
            return latestPrice.price
        }

        return prices[0].price
    }
    return (
        <Wrapper>
            <div>{prop.product.name}</div>
            <div>{getPrice()}</div>
            <div className="edit">Edit</div>
            <div className="close">x</div>
        </Wrapper>
    )
}

export default Product