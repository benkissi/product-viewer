import React from 'react'

import { InputField, Wrapper } from './input-styles'


const Input = (props) => {
    return (
        <Wrapper width={props.width}>
            {
                props.span ? <span className="input-prefix"><p>{props.span}</p></span> : ""
            }
            <InputField {...props} />
        </Wrapper>

    )
}

export default Input