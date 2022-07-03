import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
    color: #ffffff;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body {
    position: relative;
    background: #070707;
  }
  .App {
    height: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  ::-webkit-scrollbar {
    display: none; 
  }
  @media (max-width: 1200px) {
    .App {
      max-width: 90%;
    }
  }
`;

export default GlobalStyle;
