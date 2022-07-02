import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    scrollbar-width: thin;
    scrollbar-color: #333333 #ffffff;
    -webkit-font-feature-settings: "lnum";
    -moz-font-feature-settings: "lnum";
    font-feature-settings: "lnum";
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body {
    background: #070707;
  }
  .App {
    max-width: 1080px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
