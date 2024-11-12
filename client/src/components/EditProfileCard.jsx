import React, { useState } from "react";
import styled from "styled-components";
import { User } from "lucide-react";
import { theme } from "../styles/theme";

const EditProfileCard = ({ onSave, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    username: initialData?.username || "",
    email: initialData?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Las nuevas contraseñas no coinciden");
      return;
    }
    onSave(formData);
  };

  return (
    <CardContainer>
      <AvatarContainer>
        {initialData?.avatarUrl ? (
          <AvatarImage src={initialData.avatarUrl} alt="Avatar" />
        ) : (
          <UserIcon size={48} />
        )}
      </AvatarContainer>
      <CardHeader>
        <h2>Editar Perfil</h2>
      </CardHeader>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <PasswordSection>
          <h3>Cambiar Contraseña</h3>
          <FormGroup>
            <Label htmlFor="currentPassword">Contraseña Actual</Label>
            <Input type="password" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">Nueva Contraseña</Label>
            <Input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
            <Input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </FormGroup>
        </PasswordSection>
        <ButtonGroup>
          <CancelButton type="button" onClick={onCancel}>Cancelar</CancelButton>
          <SaveButton type="submit">Guardar Cambios</SaveButton>
        </ButtonGroup>
      </Form>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #333;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const UserIcon = styled(User)`
  color: ${theme.colors.text.primary};
`;

const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: #2a2a2a;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #29c9a9;
    box-shadow: 0 0 0 2px rgba(41, 201, 169, 0.2);
  }
  &::placeholder {
    color: #666;
  }
`;

const PasswordSection = styled.div`
  border-top: 1px solid #333;
  padding-top: 1.5rem;
  margin-top: 0.5rem;
  h3 {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0 1.5rem 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SaveButton = styled.button`
  background: #29c9a9;
  color: #000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #20a088;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: 1px solid #333;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default EditProfileCard;
