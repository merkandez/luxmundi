import styled from "styled-components";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../styles/theme";
import PropTypes from "prop-types";
import { useState } from "react";

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <CloseButton onClick={onClose}>
              <X size={20} />
            </CloseButton>

            <ModalContent>
              <Title>Welcome Back</Title>
              <Description>Sign in to your account</Description>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    error={errors.password}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  )}
                </InputGroup>

                <RememberRow>
                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    <CheckboxLabel htmlFor="remember">
                      Remember me
                    </CheckboxLabel>
                  </CheckboxGroup>
                  <ForgotPassword type="button">
                    Forgot password?
                  </ForgotPassword>
                </RememberRow>

                <LoginButton type="submit">Sign In</LoginButton>

                <Divider>
                  <DividerLine />
                  <DividerText>or continue with</DividerText>
                  <DividerLine />
                </Divider>

                <SocialButtons>
                  <SocialButton>
                    <img src="/google-icon.svg" alt="Google" />
                    Google
                  </SocialButton>
                  <SocialButton>
                    <img src="/apple-icon.svg" alt="Apple" />
                    Apple
                  </SocialButton>
                </SocialButtons>

                <SignUpPrompt>
                  Don&apos;t have an account? <SignUpLink>Sign up</SignUpLink>
                </SignUpPrompt>
              </Form>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ModalContent = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.5rem;
  background: linear-gradient(120deg, ${theme.colors.primary}, #4adebb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  color: ${theme.colors.text.secondary};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  transition: ${theme.animation.transition};

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
    outline: none;
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ff4d4f;
    
    &:focus {
      border-color: #ff4d4f;
      box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
    }
  `}
`;

const RememberRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  accent-color: ${theme.colors.primary};
`;

const CheckboxLabel = styled.label`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const ForgotPassword = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${theme.colors.primary};
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

const DividerText = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const SignUpPrompt = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const SignUpLink = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default LoginModal;
