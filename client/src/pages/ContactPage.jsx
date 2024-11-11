import styled from "styled-components";
import { Mail, Phone, MapPin } from "lucide-react";
import CloseButton from "../components/CloseButton";

const ContactPage = () => {
  return (
    <ContactWrapper>
      <CloseButton />
      <ContactContent>
        <ContactInfo>
          <Title>Get in Touch</Title>
          <Description>
            We would love to hear from you. Please fill out the form below or
            reach out using the contact information provided.
          </Description>
          <ContactDetails>
            <ContactItem>
              <Mail size={20} />
              <span>contact@luxmundi.com</span>
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

        <ContactForm>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Your name" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="your@email.com" />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Textarea placeholder="Your message..." rows={6} />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }
`;

const ContactInfo = styled.div`
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #999;
  margin-bottom: 2rem;
  line-height: 1.6;
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
  color: #999;

  svg {
    color: #fff;
  }
`;

const ContactForm = styled.form`
  background: #111;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #222;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;

  &:focus {
    outline: none;
    border-color: #444;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #444;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

export default ContactPage;
