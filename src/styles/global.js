import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({theme}) => theme.DARK.D400};
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

`