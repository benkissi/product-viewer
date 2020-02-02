import React from 'react'
import { shallow } from 'enzyme';
import AddProduct from '../components/addProduct/form.jsx'
import Input from '../components/Input/input-component'
import Button from '../components/button/button-component'

describe('AddProduct form', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<AddProduct />)
    })
    
    it('should render correctly', () => {
        const inputs = wrapper.find(Input)
        const buttons = wrapper.find(Button)
        expect(inputs.length).toEqual(2)
        expect(buttons.length).toEqual(1)
    })

    it('should render in edit mode if edit prop is provided', () => {
        const edit = {
            name: 'test', 
            price: 100
        }
        wrapper = shallow(<AddProduct edit={edit} />)
        wrapper.setProps({edit})
        expect(wrapper.html()).toContain('Edit Product')
    })
})
