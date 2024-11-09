import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/authService';
import styled from 'styled-components';
import SocialButton from '../SocialButton';


const socialButtons = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/a86aac696dbf1b3069ef825e1b42fd84c2ed563a2107c05440d6ac47931b1cbb?apiKey=4a6b075cba4d439db44d5a2134fb5890&',
    text: 'Facebook',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/dd40f00dc6db3c0364106f8aa8f7a7ccce9226f67ec57e59b892dba3a52f6da7?apiKey=4a6b075cba4d439db44d5a2134fb5890&',
    text: 'Apple',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/582ae3bba05c84d1bd07d50c1deb2c9f18f000a037f291245497f928ee54dfd9?apiKey=4a6b075cba4d439db44d5a2134fb5890&',
    text: 'Google',
  },
];

const RegisterForm = ({ onClose, onSwitchToLogin }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      await registerUser(data);
      alert('Registro exitoso');
      onClose();
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro');
    }
  };

  return (
    <FormContainer>
      {!showForm ? (
        <SocialContainer>
          <CloseButton onClick={onClose}>✕</CloseButton>
          <Title>Regístrate</Title>
          {socialButtons.map((button, index) => (
            <SocialButton key={index} icon={button.icon} text={button.text} />
          ))}
          {/* Botón "Use Email" que activa el formulario */}
          <SocialButton
            icon='https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/5d6c0619ab336d21ae9a53e309379cfa751fa2981b48ec84cd19fb4c6ca8fb7f?apiKey=4a6b075cba4d439db44d5a2134fb5890&'
            text='Usar mi cuenta de correo'
            onClick={() => setShowForm(true)}
          />
          <SignUpText>
            ¿Ya tienes una cuenta?{' '}
            <SignUpLink onClick={onSwitchToLogin}>Inicia sesión</SignUpLink>
          </SignUpText>
        </SocialContainer>
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <CloseButton onClick={onClose}>✕</CloseButton>
          <Title>Regístrate</Title>
          <FormGroup>
            <Label>Nombre de usuario</Label>
            <Input
              {...register('username', {
                required: 'Este campo es obligatorio',
              })}
              placeholder='Introduce tu nombre de usuario'
            />
            {errors.username && (
              <ErrorText>{errors.username.message}</ErrorText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Correo electrónico</Label>
            <Input
              type='email'
              {...register('email', { required: 'Este campo es obligatorio' })}
              placeholder='Introduce tu correo electrónico'
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Contraseña</Label>
            <Input
              type='password'
              {...register('password', {
                required: 'Este campo es obligatorio',
              })}
              placeholder='Introduce tu contraseña'
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Repetir Contraseña</Label>
            <Input
              type='password'
              {...register('confirmPassword', {
                required: 'Este campo es obligatorio',
              })}
              placeholder='Repite tu contraseña'
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </FormGroup>
          <SubmitButton type='submit'>Registrarse</SubmitButton>
          <SignUpText>
            ¿Ya tienes una cuenta?{' '}
            <SignUpLink onClick={onSwitchToLogin}>Inicia sesión</SignUpLink>
          </SignUpText>
        </StyledForm>
      )}
    </FormContainer>
  );
};

export default RegisterForm;

// Estilos

const FormContainer = styled.div`
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

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d2d2d;
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StyledForm = styled.form`
  background-color: #2d2d2d;
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h2`
  color: #ffffff;
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
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #29c9a9;
  }

  &::placeholder {
    color: #888888;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #29c9a9;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #24b598;
  }
`;

const UseEmailButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background-color: #555;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #666;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  font-size: 14px;
`;

const SignUpLink = styled.span`
  color: #29c9a9;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 5px;
`;
