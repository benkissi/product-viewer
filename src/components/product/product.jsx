import React from 'react'
import {
    Wrapper
} from './product-style'

import {getLatestPrice} from '../../utils/methods'

const Product = props => {
    const getPrice = () => {
        const prices = props.product.prices
        if(prices.length > 1){
            const latestPrice = getLatestPrice(props.product.prices)
            return latestPrice.price
        }

        return prices[0].price
    }
    return (
        <Wrapper>
            <div>{props.product.name}</div>
            <div>{getPrice()}</div>
            <div className="edit">Edit</div>
            <div onClick={() => props.remove(props.product.id)} className="close">x</div>
        </Wrapper>
    )
}

export default Product