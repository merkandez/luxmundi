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
            <CloseButton onClick={onClose} aria-label="Close">
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
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    max-width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  transition: all 0.2s ease;

  &:focus {
    border-color: #fff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

const DividerText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const LoginPrompt = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const LoginLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterModal;
