import styled from "styled-components";


export const Container = styled.div`
  

  input {
    width: 100%;
    padding: 1.6rem 1.4rem;
    color: white;
    background-color: ${({theme}) => theme.DARK.D900};
    outline: none;
    border: none;
    border-radius: 0.8rem;
    
    &::placeholder {
      color: ${({theme}) => theme.LIGHT.L500};
    }

    &:focus {
      border: 0.1rem solid white;
      background: transparent;
    }
  }
`

