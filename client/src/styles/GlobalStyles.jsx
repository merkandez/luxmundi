// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Estilos generales para el body */
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
  }

  /* Estilos de encabezado */
  h1, h2, h3, h4, h5, h6 {
    color: #222;
    margin-bottom: 0.5em;
  }

  /* Estilos de párrafo */
  p {
    margin-bottom: 1em;
  }

  /* Estilos de enlace */
  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Estilos de botones */
  button {
    font-family: inherit;
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  /* Estilos de formularios */
  input, select, textarea {
    font-family: inherit;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export default GlobalStyles;
