import styled from "styled-components";

const AuthWrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  width: 178px;
  margin: auto 0;
  font: var(--sds-typography-body-font-weight-regular)
    var(--sds-typography-body-size-medium) / 1
    var(--sds-typography-body-font-family);
`;

const Button = styled.button`
  align-self: stretch;
  border-radius: 8px;
  gap: 8px;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
  padding: 8px;
  cursor: pointer;
  border: 1px solid;
  font-family: inherit;
  font-size: inherit;
`;

const LoginButton = styled(Button)`
  background-color: #303030;
  color: #ffffff;
  border-color: #949494;
`;

const RegisterButton = styled(Button)`
  background-color: #f5f5f5;
  color: var(--sds-color-text-brand-on-brand);
  border-color: #f5f5f5;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
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
