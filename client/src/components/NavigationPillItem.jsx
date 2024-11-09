// client/src/components/NavigationPillItem.jsx
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationPillItem = ({ label, href, isActive }) => (
  <StyledLink to={href}>
    <Pill isActive={isActive}>{label}</Pill>
  </StyledLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Pill = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  padding: 8px 16px;
  background-color: ${({ isActive }) => (isActive ? "#444" : "transparent")};
  color: #ffffff;
  border-radius: 8px;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

NavigationPillItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavigationPillItem;
