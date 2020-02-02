import React from 'react'

import * as ModalStyles from './modal-styles'


const Modal = (props) => {
    const handleToggle = (e) => {
        if (e.target.classList.contains('modal')) {
            props.toggle()
        }

    }

    let width = () => {
        switch (props.width) {
            case 'small':
                return '40%'
            case 'medium':
                return '60%'
            case 'large':
                return '80%'
            default:
                return '40%'
        }
    }



    return (
        <ModalStyles.Wrapper onClick={handleToggle} open={props.open} id="myModal" className="modal">

            <ModalStyles.Content width={width()} className="modal-content">
                {props.children}
            </ModalStyles.Content>

        </ModalStyles.Wrapper >
    )
}

export default Modal