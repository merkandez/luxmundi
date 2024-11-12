/* import styled from "styled-components";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloseButtonWrapper = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1000;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
  }
`;

const CloseButton = () => {
  const navigate = useNavigate();

  return (
    <CloseButtonWrapper onClick={() => navigate(-1)} aria-label="Close">
      <X size={24} color="#fff" />
    </CloseButtonWrapper>
  );
};

export default CloseButton;
 */