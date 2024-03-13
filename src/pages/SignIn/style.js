import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  
  .icon {
    margin-bottom: 6rem;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.4rem;
  background-color: ${({theme}) => theme.DARK.D700};
  width: 100%;
  max-width: 50rem;
  min-width: 25rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 1.6rem;
  box-shadow: 0px 10px 10px 0px ${({theme}) => theme.DARK.D100};
  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({theme}) => theme.LIGHT.L100};
    line-height: 150%;
    padding-bottom: 3.2rem;
    text-align: center;

    
  }

  .input-wrapper {
    span {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      color: ${({theme}) => theme.LIGHT.L400};
    }

    input {
      margin: .8rem 0 3.2rem 0
    }


  }
  a {
    font-size: 1.4rem;
    margin-top: 3.2rem;
    color: ${({theme}) => theme.LIGHT.L100};
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover {
      color: ${({theme}) => theme.LIGHT.L300};
    }
  }
`