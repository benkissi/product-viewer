import React from 'react'

import { ButtonStyle, Wrapper } from './button-styles'


const Button = (props) => {
    return (
        <Wrapper width={props.width}>
            <ButtonStyle {...props}>{props.text}</ ButtonStyle>
        </Wrapper>

    )
}

export default Button