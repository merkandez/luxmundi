import PropTypes from "prop-types";
import styled from "styled-components";

const NavigationPillItem = ({ label, isActive }) => (
  <Pill isActive={isActive}>{label}</Pill>
);

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
  isActive: PropTypes.bool.isRequired,
};

export default NavigationPillItem;

