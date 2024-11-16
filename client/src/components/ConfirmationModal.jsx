import React, { useEffect } from 'react';
import styled from 'styled-components';

const ConfirmationModal = ({
  isOpen,
  onClose,
  message,
  showButtons = true,
}) => {
  // Cierra el modal automáticamente después de 3 segundos si no hay botones
  useEffect(() => {
    if (isOpen && !showButtons) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Ajusta el tiempo según prefieras

      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [isOpen, onClose, showButtons]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      {' '}
      {/* Cierra al hacer clic en el fondo */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {' '}
        {/* Evita cierre al hacer clic en el contenido */}
        <Message>{message}</Message>
        {showButtons && (
          <ButtonContainer>
            <ModalButton onClick={onClose}>Aceptar</ModalButton>
          </ButtonContainer>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmationModal;

// Estilos
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  color: white;
`;

const Message = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #29c9a9;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #24b598;
  }
`;
