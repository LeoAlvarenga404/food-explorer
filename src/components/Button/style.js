import styled from "styled-components";


export const Container = styled.button`

  padding-block: 1.2rem;
  text-align: center;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  border: none;
  width: 100%;

  color: ${({theme}) => theme.LIGHT.L100};
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;
  transition: background .2s;
  cursor: pointer;
  &:hover {
    background: ${({theme}) => theme.COLORS.TOMATO_200};
  }
`


