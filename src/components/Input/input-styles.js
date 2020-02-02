import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width ? props.width : '100%'};
    position: relative;

    > * {
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .input-prefix {  
        display: flex; 
        background: #cdcdcd;
        align-items: center;
        justify-content: center;
        width: 40px;
        border: 0;

        p {
            margin: 0;

        }
    }
`

export const InputField = styled.input`
    width: 100%;
    position: relative;
    background: #fff;
    font: inherit;
    border: 1px solid #e8e8e8;
    padding: ${(props) => props.form === "true" ? "10px 18px" : "22px 18px"};
    transition: box-shadow 1s;
    outline: 0;

    &:hover {
        border: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
    }
`