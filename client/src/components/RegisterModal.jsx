import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import SocialButton from "./SocialButton";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      // Add form data here
    });
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

            <Form onSubmit={handleSubmit}>
              <Title>Create Account</Title>
              <Description>Join our photography community</Description>

              <InputGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter your full name" />
              </InputGroup>

              <InputGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Create a password" />
              </InputGroup>

              <SubmitButton type="submit">Sign Up</SubmitButton>

              <Divider>
                <DividerLine />
                <DividerText>or continue with</DividerText>
                <DividerLine />
              </Divider>

              <SocialButtonsContainer>
                <SocialButton
                  icon="/google-icon.svg"
                  text="Continue with Google"
                />
                <SocialButton
                  icon="/apple-icon.svg"
                  text="Continue with Apple"
                />
              </SocialButtonsContainer>

              <LoginPrompt>
                Already have an account?{" "}
                <LoginLink onClick={onClose}>Log in</LoginLink>
              </LoginPrompt>
            </Form>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

RegisterModal.propTypes = {
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
  padding: 2.5rem 2rem;
  width: 90%;
  max-width: 380px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    width: 100%;
  }
`;

const CloseButton = styled.button`
  // ... same as LoginModal
`;

const Form = styled.form`
  // ... same as LoginModal
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: white;
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

const DividerText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const LoginPrompt = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const LoginLink = styled.span`
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterModal;
