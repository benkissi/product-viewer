import React, {useEffect, useState} from 'react'
import Product from '../../components/product/product.jsx'
import { connect } from 'react-redux'

import Button from '../../components/button/button-component'
import Modal from '../../components/modal/modal-component'
import AddProduct from '../../components/addProduct/form'

import {getObjectArray, generateId} from '../../utils/methods'

import {
    fetchProductStart,
    addProductStart,
    deleteProductStart,
    editStart
} from '../../redux/collection/collection-actions'

import {
    Wrapper,
    Header
} from './collection-styles'

const CollectionPage = (props) => {
    const {fetchProducts, products, addProduct, removeProduct, saveEdits} = props
    const [state, setState] = useState({
        openModal: false,
        edit: null
    })
    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if(state.edit){
            toggleModal()
        }
       
    }, [state.edit])
    
    const productArray = getObjectArray(products)

    const toggleModal = () => {
        setState({
            ...state,
            openModal: !state.openModal
        })
    }

    const handleAddProduct = (details) => {
        details = {
            id: generateId(),
            name: details.name,
            prices: [
                {
                    id: generateId(),
                    price: details.price,
                    date: new Date()
                }
            ]
        }

        addProduct(details)
        toggleModal()
    }

    const handleSaveEdits = (id, details) => {
        details.id=id
        saveEdits(details)
        toggleModal()
    }

    const handleEdit = (id, name, price) => {
        setState({
            ...state,
            edit: {
                id, name, price
            }
        })
    }

    return(
        <Wrapper>
            <Modal width="medium" open={state.openModal} toggle={toggleModal}>
                <AddProduct saveEdits={handleSaveEdits} add={handleAddProduct} edit={state.edit} title="Add Product"/>
            </Modal>
            <Header>
                <div>Name</div>
                <div>Price</div>
                <div>Edit</div>
                <div>Delete</div>
            </Header>

            {
                productArray.map(item => <Product handleEdit={handleEdit} onClick={toggleModal} remove={removeProduct} product={item} key={item.id}/>)
            }
            <Button onClick={toggleModal} text="Add a product"/>
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    products: state.collection.products
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProductStart()),
    addProduct: (product)=> dispatch(addProductStart(product)),
    removeProduct: (id) => dispatch(deleteProductStart(id)),
    saveEdits: (details) => dispatch(editStart(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)