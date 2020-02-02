import React, {useState} from 'react'
import Input from '../Input/input-component'
import Button from '../button/button-component'

import {
    Wrapper
} from './form-styles'

const AddProduct = props => {
    const [state, setState] = useState({
        productName: '',
        price: ''
    })

    const onInputChange = (e) => {
        e.preventDefault()

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const addProduct = () => {
        const isEmpty = Object.values(state).some(field => field === null || field === '')
        if(isEmpty){
            alert('fields cannot be empty')
        }else{
            const details = {
                name: state.productName,
                price: state.price
            }

            props.add(details)
            setState({
                productName:'',
                price: ''
            })
        }
        
    }

    return (
        <Wrapper>
            <h2>{props.title}</h2>
            <Input name="productName" value={state.productName||''} onChange={onInputChange} placeholder="Product name" type="text"/>
            <Input name="price" value={state.price||''} onChange={onInputChange} placeholder="Product price" type="number"/>
            <Button onClick={addProduct} width="100%"text="Add"/>
        </Wrapper>
    
    )
}

export default AddProduct