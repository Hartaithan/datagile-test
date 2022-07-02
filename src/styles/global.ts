import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
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
`;

export default GlobalStyle;
