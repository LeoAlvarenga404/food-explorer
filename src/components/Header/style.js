import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  padding: 2.8rem 12.3rem;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.DARK.D600};
  gap: 3.2rem;

  .icon {
    :nth-child(1){
      height: 3rem;
    }
    :nth-child(2){
      font-size: 2.4rem;
      margin-left: 1rem;
    }
  }

  .input-with-search {
    width: 100%;
    position: relative;

    input {
    width: 100%;
    padding-block: 1.6rem;
    padding-inline: 5rem;
    color: white;
    background-color: ${({theme}) => theme.DARK.D900};
    outline: none;
    border: none;
    border-radius: 0.8rem;
    
    &::placeholder {
      color: ${({theme}) => theme.LIGHT.L500};
      
    }
  
  }

  svg {
    position: absolute;
    top: 1.2rem;
    left: 1.8rem;

    font-size: 2.4rem;
    color: ${({theme}) => theme.LIGHT.L400};
  }
  }

  button {
    display: flex;
    align-items: center;
    gap: .8rem;
    white-space: nowrap;
    padding: 1.6rem 4.6rem;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};  
    border: none;
    border-radius: 0.5rem;
    color: ${({theme}) => theme.LIGHT.L100};
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: ${({theme}) => theme.COLORS.TOMATO_200};  
      color: ${({theme}) => theme.LIGHT.L100};  
    }

    svg {
      font-size: 3.2rem;
    }

    
    
  }

  .logout {
    svg {
      font-size: 3.2rem;
      color: ${({theme}) => theme.LIGHT.L100};
      cursor: pointer;
    
    }
  }
` 
  
    

