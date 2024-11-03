import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/design/Header'; // Componente personalizado de Header
import Footer from '../components/design/Footer'; // Componente personalizado de Footer
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';
import ModalForm from '../components/auth/ModalForm';
import RegisterForm from '../components/auth/RegisterForm'; // Formulario de registro
import LoginForm from '../components/auth/LoginForm';

const Layout = () => {
  const { isAuthenticated, role, logout } = useAuth(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Controla si se muestra el login o registro

  const openModalForm = (isLoginForm) => {
    setIsLogin(isLoginForm);
    setShowModalForm(true);
  };
  // Función para cerrar el modal
  const closeModalForm = () => setShowModalForm(false);

  return (
    <MainContainer>
      <Header
        isAuthenticated={isAuthenticated}
        role={role} // Pasamos el role al Header
        logout={logout}
        openLoginModal={() => openModalForm(true)} // Abre el modal de login
        openRegisterModal={() => openModalForm(false)} // Abre el modal de registro
      />
      <Content>
        <Outlet />
        {/* Renderizar el modal solo si el usuario no está autenticado y se requiere login o registro */}
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
  background-color: #f4f4f9;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Color semitransparente
  z-index: 10; // Asegura que esté detrás del modal
`;
