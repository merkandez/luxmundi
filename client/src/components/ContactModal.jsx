import styled from "styled-components";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { theme } from "../styles/theme";

const ContactModal = ({ isOpen, onClose }) => {
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
              <ContactInfo>
                <Title>👋 Hola, estamos aquí.</Title>
                <Description>
                
                No seas tímido. En Luxmundi estamos encantados de hablar contigo.
                </Description>
                <ContactDetails>
                  <ContactItem>
                    <Mail size={20} />
                    <span>info@luxmundi.com</span>
                  </ContactItem>
                  <ContactItem>
                    <Phone size={20} />
                    <span>+1 (555) 123-4567</span>
                  </ContactItem>
                  <ContactItem>
                    <MapPin size={20} />
                    <span>123 Photography St, NY 10001</span>
                  </ContactItem>
                </ContactDetails>
              </ContactInfo>

              <Form>
                <InputGroup>
                  <Label>Nombre</Label>
                  <Input type="text" placeholder="Your name" />
                </InputGroup>
                <InputGroup>
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </InputGroup>
                <InputGroup>
                  <Label>Mensaje</Label>
                  <Textarea placeholder="Your message..." rows={4} />
                </InputGroup>
                <SubmitButton type="submit">Envía tu mensaje</SubmitButton>
              </Form>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
  max-width: 800px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: ${theme.colors.text.primary};
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, ${theme.colors.primary}, #4adebb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${theme.colors.text.secondary};

  svg {
    color: ${theme.colors.primary};
  }
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
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  transition: ${theme.animation.transition};
  resize: vertical;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
    outline: none;
  }
`;

const SubmitButton = styled.button`
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

export default ContactModal;
