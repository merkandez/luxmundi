import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LayoutDashboard, Users, FileText } from "lucide-react";

const NavbarAdmin = ({ setActiveComponent }) => {
  return (
    <NavContainer>
      <NavHeader>
        <Title>LuxMundi</Title>
        <Subtitle>Panel Admin</Subtitle>
      </NavHeader>
      <NavItems>
        <NavItem onClick={() => setActiveComponent("home")}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavItem>
        <NavItem onClick={() => setActiveComponent("PostManagement")}>
          <FileText size={20} />
          <span>Publicaciones</span>
        </NavItem>
        <NavItem onClick={() => setActiveComponent("UserManagement")}>
          <Users size={20} />
          <span>Usuarios</span>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: ${theme.colors.background};
  min-width: 250px;
  padding: 2rem 1rem;
  border-right: 1px solid ${theme.colors.border};
  height: 100vh;
  position: sticky;
  top: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 200px;
    padding: 1.5rem 0.8rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    top: auto;
    width: 100%;
    height: auto;
    padding: 0.5rem;
    border-top: 1px solid ${theme.colors.border};
    border-right: none;
  }
`;

const NavHeader = styled.div`
  padding: 0 1rem 2rem;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  border: none;
  background: none;
  color: ${theme.colors.text.primary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;

  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
  }

  svg {
    color: inherit;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.8rem;
    font-size: 0.8rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export default NavbarAdmin;
