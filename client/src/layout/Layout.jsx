// src/layout/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';
import ModalForm from '../components/auth/ModalForm';
import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';
import ProtectedWrapper from '../components/auth/ProtectedWrapper';

const Layout = () => {
  const { isAuthenticated, role, logout } = useAuth();
  const [showModalForm, setShowModalForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModalForm = (isLoginForm) => {
    setIsLogin(isLoginForm);
    setShowModalForm(true);
  };

  const closeModalForm = () => setShowModalForm(false);

  return (
    <MainContainer>
      <Header
        isAuthenticated={isAuthenticated}
        role={role}
        logout={logout}
        openLoginModal={() => openModalForm(true)}
        openRegisterModal={() => openModalForm(false)}
      />
      <Content>
        <ProtectedWrapper onTrigger={() => openModalForm(false)}>
          <Outlet />
        </ProtectedWrapper>
        {/* Modal para login o registro */}
        {!isAuthenticated && showModalForm && (
          <ModalForm onClose={closeModalForm}>
            {isLogin ? <LoginForm onClose={closeModalForm} /> : <RegisterForm onClose={closeModalForm} />}
          </ModalForm>
        )}
      </Content>
      <Footer />
      {/* Overlay oscuro cuando el modal está activo */}
      {!isAuthenticated && showModalForm && <Overlay onClick={closeModalForm} />}
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
