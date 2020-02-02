import styled from 'styled-components'

export const Wrapper = styled.div`
    display: ${props => props.open ? 'flex' : 'none'}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 4; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(31,31,32,0.9); /* Black w/ opacity */
`

export const Content = styled.div`
    background-color: white;
    margin: auto;
    padding: 0 20px 0 20px;
    width: ${(props) => props.width ? props.width : "70%"};
`