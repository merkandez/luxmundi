// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #1E1E1E;
    color: #ffffff;
  }
`;

export default GlobalStyles;
