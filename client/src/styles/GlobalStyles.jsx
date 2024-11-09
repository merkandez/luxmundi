// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0A0A0A;
    color: #ffffff;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    background-color: #0A0A0A;
  }

  button {
    font-family: 'DM Sans', sans-serif;
  }

  input, textarea {
    font-family: 'DM Sans', sans-serif;
  }

  ::selection {
    background-color: rgba(255, 255, 255, 0.1);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
