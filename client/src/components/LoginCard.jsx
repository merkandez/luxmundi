import styled from "styled-components";

const LoginCard = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <InputForm>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759v-10.856a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z" />
          </Icon>
          <Input placeholder="Enter your Email" type="text" />
        </InputForm>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <InputForm>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512">
            <path d="M336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
          </Icon>
          <Input placeholder="Enter your Password" type="password" />
        </InputForm>
      </FormGroup>

      <Row>
        <div>
          <input type="radio" />
          <RadioLabel>Remember me</RadioLabel>
        </div>
        <Span>Forgot password?</Span>
      </Row>

      <SubmitButton>Sign In</SubmitButton>

      <Text>
        Dont have an account? <Span>Sign Up</Span>
      </Text>

      <Text className="line">Or With</Text>

      <Row>
        <SocialButton className="google">
          <GoogleIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="..." fill="#FBBB00" />
            {/* Additional Google icon path here */}
          </GoogleIcon>
          Google
        </SocialButton>
        <SocialButton className="apple">
          <AppleIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.773 22.773"
          >
            <path d="..." />
          </AppleIcon>
          Apple
        </SocialButton>
      </Row>
    </Form>
  );
};

export default LoginCard;

// Styled Components

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #151717;
  font-weight: 600;
`;

const InputForm = styled.div`
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;

  &:focus-within {
    border: 1.5px solid #2d79f3;
  }
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #888;
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: 400;
`;

const Span = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;

const Text = styled.p`
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
`;

const SocialButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #2d79f3;
  }
`;

const GoogleIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const AppleIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
