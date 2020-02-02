import React, {useState, useEffect} from 'react'
import Input from '../Input/input-component'
import Button from '../button/button-component'

import {
    Wrapper
} from './form-styles'

const AddProduct = props => {
    const [state, setState] = useState({
        productName: '',
        price: '',
        edit: props.edit
    })

    useEffect(() => {
        if(props.edit){
            setState({
                ...state,
                edit: props.edit,
                productName: props.edit.name,
                price: props.edit.price
            })
            
        }
    }, [props.edit])
    

    

    const onInputChange = (e) => {
        e.preventDefault()

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const addProduct = () => {
        const isEmpty = state.productName === '' && state.price === ''
        if(isEmpty){
            alert('fields cannot be empty')
        }else{
            const details = {
                name: state.productName,
                price: state.price
            }

            state.edit? props.saveEdits(state.edit.id, details) :props.add(details)
            setState({
                productName:'',
                price: ''
            })
        }
        
    }

    return (
        <Wrapper>
            <h2>{state.edit? 'Edit Product': 'Add Product'}</h2>
            <Input name="productName" value={state.productName||''} onChange={onInputChange} placeholder="Product name" type="text"/>
            <Input name="price" value={state.price||''} onChange={onInputChange} placeholder="Product price" type="number"/>
            <Button onClick={addProduct} width="100%" text={state.edit? 'Edit': 'Add'}/>
        </Wrapper>
    
    )
}

export default AddProduct