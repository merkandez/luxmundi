import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../styles/theme";

function SocialButton({ icon, text }) {
  return (
    <StyledButton>
      <ButtonIcon src={icon} alt={text} />
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
}

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.75rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const ButtonText = styled.span`
  font-weight: 500;
  color: ${theme.colors.text.primary};
  flex: 1;
  text-align: center;
`;

export default SocialButton;
