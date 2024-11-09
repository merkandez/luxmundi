import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PropTypes from "prop-types";

const LoginOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoginCard
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <CloseButton onClick={onClose}>
              <X size={24} />
            </CloseButton>
            <LoginContent>
              <Title>Welcome Back</Title>
              <Description>Sign in to continue your journey</Description>
              <Form>
                <InputGroup>
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </InputGroup>
                <InputGroup>
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </InputGroup>
                <ForgotPassword>Forgot password?</ForgotPassword>
                <LoginButton>Sign In</LoginButton>
                <Divider>
                  <span>or continue with</span>
                </Divider>
                <SocialButtons>
                  <SocialButton>Google</SocialButton>
                  <SocialButton>Apple</SocialButton>
                </SocialButtons>
              </Form>
            </LoginContent>
          </LoginCard>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

LoginOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  z-index: 1000;
`;

const LoginCard = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    transform: rotate(90deg);
  }
`;

const LoginContent = styled.div`
  padding: 32px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #999;
  font-size: 14px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #ccc;
  font-size: 14px;
`;

const Input = styled.input`
  background: #2a2a2a;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #29c9a9;
  }
`;

const LoginButton = styled.button`
  background: #29c9a9;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #20a088;
  }
`;

const ForgotPassword = styled.a`
  color: #29c9a9;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 16px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #333;
  }

  span {
    padding: 0 16px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 12px;
  background: #2a2a2a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
  }
`;

export default LoginOverlay;
