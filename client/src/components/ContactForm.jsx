import styled from "styled-components";
import { useEffect, useRef } from "react";

const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

const FormBox = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: #333;
  color: #ccc;
  border: none;
  outline: none;
  font-size: 14px;
  margin-bottom: 16px;

  &:focus {
    border: 2px solid #6a0dad;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: #333;
  color: #ccc;
  border: none;
  outline: none;
  font-size: 14px;
  min-height: 100px;

  &:focus {
    border: 2px solid #6a0dad;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FormContainer ref={formRef}>
      <button onClick={scrollToForm}>Scroll to Form</button>
      <FormBox onSubmit={handleSubmit}>
        <div>
          <Label>Nombre</Label>
          <Input type="text" placeholder="Value" />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Value" />
        </div>
        <div>
          <Label>Message</Label>
          <Textarea placeholder="Value" />
        </div>
        <Button type="submit">Enviar</Button>
      </FormBox>
    </FormContainer>
  );
};

export default ContactForm;
