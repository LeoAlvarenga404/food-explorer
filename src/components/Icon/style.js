import styled from "styled-components";

export const Container = styled.div`
  a {

    display: flex;
  align-items: center;
  
  
  h1 {
    font-size: 4.2rem;
    font-family: 'Roboto';
    color: ${({theme}) => theme.LIGHT.L100};
    font-weight: bold;
    margin-left: 2rem;
    white-space: nowrap;
   }
  }

`