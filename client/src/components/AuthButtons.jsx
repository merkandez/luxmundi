import styled from "styled-components";

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 2px;
  padding: 0.6rem 1.8rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 120px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const RegisterButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

function AuthButtons() {
  return (
    <AuthWrapper>
      <LoginButton>Log in</LoginButton>
      <RegisterButton>Register</RegisterButton>
    </AuthWrapper>
  );
}

export default AuthButtons;
