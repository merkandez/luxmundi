import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const AuthModal = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(true);

  const switchToLogin = () => setIsRegistering(false);
  const switchToRegister = () => setIsRegistering(true);

  return (
    <ModalOverlay>
      <ModalContent>
        {isRegistering ? (
          <RegisterForm onClose={onClose} onSwitchToLogin={switchToLogin} />
        ) : (
          <LoginForm onClose={onClose} onSwitchToRegister={switchToRegister} />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;

// Estilos para el modal
const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #2d2d2d;
  padding: 40px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
