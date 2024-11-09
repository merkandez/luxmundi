import styled from "styled-components";
import PropTypes from "prop-types";

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
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: var(--sds-size-stroke-border) solid var(--Gray-true-300, #d6d6d6);
  background-color: #fff;
  display: flex;
  width: 100%;
  text-align: center;
  padding: 14px;
  margin-top: 12px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: normal;
  }
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const ButtonText = styled.span`
  align-self: stretch;
  flex: 1;
  margin: auto 0 auto 10px;
`;

export default SocialButton;