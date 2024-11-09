import styled from "styled-components";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} aria-label={label}>
      <ArrowLeft size={20} />
      <span>{label}</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  font-size: 0.9rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

BackButton.propTypes = {
  label: PropTypes.string,
};

export default BackButton;
