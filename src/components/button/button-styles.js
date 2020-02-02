import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    height: fit-content !important;
    position: relative;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const ButtonStyle = styled.button`
    width: 100%;
    background: ${props => props.bgColor ? props.bgColor : '#ee6984'};
    height: fit-content;
    font: inherit;
    padding: 22px 18px;
    transition: box-shadow 1s;
    outline: 0;
    color: white;
    border: 0;
    
    &:hover {
        border: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
        cursor: pointer;
    }
`