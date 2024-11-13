// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: ${theme.colors.primary};
    --primary-hover: ${theme.colors.primaryHover};
    --background: ${theme.colors.background};
    --surface: ${theme.colors.surface};
  }

  body {
    background-color: var(--background);
    color: ${theme.colors.text.primary};
    font-family: 'DM Sans', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Improved focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  /* Improved button accessibility */
  button, a {
    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  ${theme.animation.fadeIn}

  /* Improved text selection */
  ::selection {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.text.primary};
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${theme.colors.primaryHover};
    }
  }

  /* Improved link styles */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.animation.transition};

    &:hover {
      color: ${theme.colors.primaryHover};
    }
  }

  /* Improved form element accessibility */
  input, textarea {
    font-family: 'DM Sans', sans-serif;
    
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  }
`;

export default GlobalStyles;
