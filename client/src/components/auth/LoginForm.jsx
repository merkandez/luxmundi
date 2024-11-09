import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';

const LoginForm = ({ onClose }) => {
  const { login } = useContext(AuthContext); // Accedemos al login del contexto
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData); // Usamos el login del contexto
      alert('Inicio de sesión exitoso');
      onClose(); // Cierra el modal después de iniciar sesión
    } catch (error) {
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <LoginContainer>
      <StyledLoginForm onSubmit={handleSubmit}>
        <Title>Iniciar Sesión</Title>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </FormGroup>
        <RememberMeRow>
          <CheckboxGroup>
            <Checkbox type="checkbox" id="remember" />
            <CheckboxLabel htmlFor="remember">Remember me</CheckboxLabel>
          </CheckboxGroup>
          <ForgotPassword>Forgot password?</ForgotPassword>
        </RememberMeRow>
        <LoginButton type="submit">Login</LoginButton>
        <SignUpText>
          ¿No tienes cuenta? <SignUpLink>Regístrate</SignUpLink>
        </SignUpText>
      </StyledLoginForm>
    </LoginContainer>
  );
};

// Componentes estilizados
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e1e;
  padding: 20px;
`;

const StyledLoginForm = styled.form`
  background-color: #2d2d2d;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
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
export default LoginForm;

const RememberMeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  color: #ffffff;
  font-size: 14px;
`;

const ForgotPassword = styled.a`
  color: #29c9a9;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
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


