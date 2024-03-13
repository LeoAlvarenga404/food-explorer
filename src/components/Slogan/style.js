import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  margin-inline: 12.4rem;
  margin-top: 17rem;
  background: ${({theme}) => theme.GRADIENTS.G200};
  padding: 8.8rem 10rem;
  border-radius: 0.7rem;
  img {
    position: absolute;
    left: -6rem;
    top: -14.4rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    color: ${({theme}) => theme.LIGHT.L300};
    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 4rem;
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
`