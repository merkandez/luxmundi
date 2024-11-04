import React from "react";
import styled from 'styled-components';

// Componente de estilo para el botón
const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: bronze;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  img {
    width: 15px;
    height: 15px;
  }
`;

function CloseButtonComponent({ handleFlip }) {
  return (
    <CloseButton onClick={handleFlip}>
      <img src="./src/img/cerrar.png" alt="cerrar" />
    </CloseButton>
  );
}

export default CloseButtonComponent;