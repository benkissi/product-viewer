import React, {useEffect, useState} from 'react'
import Product from '../../components/product/product.jsx'
import { connect } from 'react-redux'

import Button from '../../components/button/button-component'
import Modal from '../../components/modal/modal-component'
import AddProduct from '../../components/addProduct/form'

import {getObjectArray, getLatestPrice} from '../../utils/methods'

import {
    fetchProductStart,
    addProductStart,
    deleteProductStart
} from '../../redux/collection/collection-actions'

import {
    Wrapper,
    Header
} from './collection-styles'

const CollectionPage = (props) => {
    const {fetchProducts, products, addProduct, removeProduct} = props
    const [state, setState] = useState({
        openModal: false
    })
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    
    const productArray = getObjectArray(products)

    const toggleModal = () => {
        setState({
            openModal: !state.openModal
        })
    }

    const generateId = () => {
        return Math.random().toString(36).substr(2, 9);
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

    return(
        <Wrapper>
            <Modal open={state.openModal} toggle={toggleModal}>
                <AddProduct add={handleAddProduct} title="Add a product"/>
            </Modal>
            <Header>
                <div>Name</div>
                <div>Price</div>
                <div>Edit</div>
                <div>Delete</div>
            </Header>

            {
                productArray.map(item => <Product remove={removeProduct} product={item} key={item.id}/>)
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
    removeProduct: (id) => dispatch(deleteProductStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)