import React from 'react'
import {
    Wrapper
} from './product-style'

import {getLatestPrice} from '../../utils/methods'

const Product = props => {
    const {id, name, prices} = props.product
    const getPrice = () => {
        if(prices.length > 1){
            const latestPrice = getLatestPrice(prices)
            return latestPrice.price
        }

        return prices[0].price
    }
    return (
        <Wrapper>
            <div>{name}</div>
            <div>{getPrice()}</div>
            <div onClick={() => props.handleEdit(id,name, getPrice())} className="edit">Edit</div>
            <div onClick={() => props.remove(props.product.id)} className="close">x</div>
        </Wrapper>
    )
}

export default Product