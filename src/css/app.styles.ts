import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 5vh;
    background-color: #F3F4F5;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    background: #ff0066;
    color: #fff;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    cursor: pointer;
  }
  .start {
    max-width: 200px;
  }
`;

export const Wave = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 38%;
  width: 100vw;
`;
