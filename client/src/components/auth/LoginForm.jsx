import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import SocialButton from '../SocialButton';
import ConfirmationModal from '../ConfirmationModal'; // Importa el modal

const socialButtons = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/dd40f00dc6db3c0364106f8aa8f7a7ccce9226f67ec57e59b892dba3a52f6da7?apiKey=4a6b075cba4d439db44d5a2134fb5890&',
    text: 'Apple',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/582ae3bba05c84d1bd07d50c1deb2c9f18f000a037f291245497f928ee54dfd9?apiKey=4a6b075cba4d439db44d5a2134fb5890&',
    text: 'Google',
  },
];

const LoginForm = ({ onClose, onSwitchToRegister }) => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Estado para manejar el modal de confirmación
  const [modalData, setModalData] = useState({
    isOpen: false,
    message: '',
    showButtons: true,
  });

  const openModal = (message, showButtons = true) => {
    setModalData({ isOpen: true, message, showButtons });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const onSubmit = async (data) => {
    try {
      await login(data);
      openModal('Inicio de sesión exitoso', false);
      setTimeout(onClose, 2000); // Cierra el modal después de un breve tiempo
    } catch (error) {
      openModal('Error en el inicio de sesión');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Title>Inicia Sesión</Title>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='email'
            {...register('email', { required: 'Este campo es obligatorio' })}
            placeholder='Enter your email'
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            {...register('password', { required: 'Este campo es obligatorio' })}
            placeholder='Enter your password'
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        <LoginButton type='submit'>Sign In</LoginButton>
        <SocialButtonsContainer>
          {socialButtons.map((button, index) => (
            <SocialButton key={index} icon={button.icon} text={button.text} />
          ))}
        </SocialButtonsContainer>

        <SignUpText>
          ¿No tienes una cuenta?{' '}
          <SignUpLink onClick={onSwitchToRegister}>Regístrate</SignUpLink>
        </SignUpText>
      </StyledForm>

      {/* Modal de confirmación */}
      <ConfirmationModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        message={modalData.message}
        showButtons={modalData.showButtons}
      />
    </FormContainer>
  );
};

export default LoginForm;

// Estilos
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(26, 26, 26, 1);
  border-radius: 8px;
`;

const StyledForm = styled.form`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #29c9a9;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;

  &:focus {
    border-color: #29c9a9;
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #29c9a9;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #24b598;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
`;

const SignUpLink = styled.span`
  color: #29c9a9;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 12px;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
