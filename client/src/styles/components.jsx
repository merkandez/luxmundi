import styled from "styled-components";
import { theme } from "./theme";

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  font-weight: 500;
  transition: ${theme.animation.transition};
  cursor: pointer;

  ${(props) =>
    props.variant === "primary" &&
    `
    background: ${theme.colors.primary};
    color: #fff;
    border: none;

    &:hover {
      background: ${theme.colors.primaryHover};
      transform: translateY(-2px);
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background: transparent;
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border};

    &:hover {
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${theme.colors.border};
  transition: ${theme.animation.transition};

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 20px rgba(41, 201, 169, 0.1);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  color: ${theme.colors.text.primary};
  transition: ${theme.animation.transition};

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;

export const PageTitle = styled.h1`
  font-size: ${theme.typography.h1.size};
  font-weight: ${theme.typography.h1.weight};
  line-height: ${theme.typography.h1.lineHeight};
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-out;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: calc(${theme.typography.h1.size} * 0.8);
  }
`;
