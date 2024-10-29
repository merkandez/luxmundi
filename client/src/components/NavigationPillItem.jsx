// client/src/components/NavigationPillItem.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavigationPillItem = ({ label, isActive }) => (
  <Pill isActive={isActive}>{label}</Pill>
);

const Pill = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ isActive }) => (isActive ? "#444" : "#1e1e1e")};
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
`;
NavigationPillItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavigationPillItem;
