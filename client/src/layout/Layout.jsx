// src/layout/Layout.jsx  ajustar esse codigo para o layout do projeto

import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/aboutus">About Us</Link>
        </Nav>
      </Header>
      <Content>
        <Outlet /> {/* Renderiza el componente correspondiente a la ruta */}
      </Content>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Content = styled.main`
  padding: 2rem;
`;
