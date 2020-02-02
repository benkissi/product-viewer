import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 10px;
    width: 80%;
    transition: 0.3s;
    align-items: center;
    justify-content: center;
  
    &:hover {
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    div {
        width: 200px;
        margin: 0 5px 0 5px;
        padding: 20px;
    }

    .close{
      color: tomato;

      &:hover {
        font-weight: bolder;
        cursor: pointer;
      }
    }

    .edit{
      color: turquoise;

      &:hover {
        font-weight: bolder;
        cursor: pointer;
      }
    }
`

