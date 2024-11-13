// client/src/components/NavigationPillItem.jsx
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationPillItem = ({ label, href, onClick, isActive }) => {
  if (onClick) {
    return (
      <StyledButton onClick={onClick}>
        <Pill isActive={isActive}>{label}</Pill>
      </StyledButton>
    );
  }

  return (
    <StyledLink to={href}>
      <Pill isActive={isActive}>{label}</Pill>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Pill = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  padding: 8px 16px;
  color: ${({ isActive }) =>
    isActive ? "#ffffff" : "rgba(255, 255, 255, 0.7)"};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }
`;

NavigationPillItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

export default NavigationPillItem;
