import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { fetchUserById, updateUser } from '../services/adminService';
import { AuthContext } from '../context/AuthContext';
import { theme } from "../styles/theme";
import { Pencil, User } from 'lucide-react';

const EditProfileCard = ({ onClose }) => {
  const { userId, isInitialized } = useContext(AuthContext); // Obtener userId e isInitialized
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    avatarUrl: '',
  });
  const [previewAvatar, setPreviewAvatar] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      if (!userId) {
        console.error("userId no está definido");
        return;
      }
      try {
        const user = await fetchUserById(userId);
        setFormData({
          username: user.username,
          email: user.email,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
          avatarUrl: user.avatarUrl || '',
        });
        setPreviewAvatar(user.avatarUrl || '');
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      }
    };

    if (isInitialized) {
      loadUserData();
    }
  }, [userId, isInitialized]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatarUrl: file }));
      setPreviewAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Las nuevas contraseñas no coinciden');
      return;
    }

    try {
      const updateData = {
        username: formData.username,
        email: formData.email,
        password: formData.newPassword || undefined,
        avatarUrl: formData.avatarUrl,
      };

      await updateUser(userId, updateData);
      alert('Perfil actualizado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Error al actualizar el perfil');
    }
  };

  // Muestra un mensaje de carga si el contexto aún no ha terminado de inicializarse
  if (!isInitialized) {
    return <LoadingMessage>Cargando...</LoadingMessage>;
  }

  return (
    <CardContainer>
      <AvatarContainer>
        {previewAvatar ? (
          <AvatarPreview src={previewAvatar} alt="Avatar" />
        ) : (
          <UserIcon size={60} />
        )}
        <EditAvatarButton htmlFor="avatar-upload">
          <Pencil size={18} />
        </EditAvatarButton>
        <input type="file" id="avatar-upload" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
      </AvatarContainer>

      <Form onSubmit={handleSubmit}>
        <Title>Editar Perfil</Title>
        <FormGroup>
          <Label htmlFor="username">Nombre de Usuario</Label>
          <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>

        <PasswordSection>
          <SectionTitle>Cambiar Contraseña</SectionTitle>
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
          <CancelButton type="button" onClick={onClose}>Cancelar</CancelButton>
          <SaveButton type="submit">Guardar Cambios</SaveButton>
        </ButtonGroup>
      </Form>
    </CardContainer>
  );
};

export default EditProfileCard;

// Componentes de estilo adicionales
const LoadingMessage = styled.div`
  color: ${theme.colors.text.primary};
  text-align: center;
  margin: 2rem 0;
  font-size: 1.2rem;
`;

// Estilos del componente
const CardContainer = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

const AvatarPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const UserIcon = styled(User)`
  color: ${theme.colors.text.primary};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditAvatarButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${theme.colors.primary};
  color: #fff;
  padding: 0.4rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  color: ${theme.colors.text.primary};
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${theme.colors.text.secondary};
  font-size: 0.85rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: #2a2a2a;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 0.9rem;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const PasswordSection = styled.div`
  border-top: 1px solid #333;
  padding-top: 1.5rem;
`;

const SectionTitle = styled.h3`
  color: ${theme.colors.text.primary};
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const SaveButton = styled.button`
  background: ${theme.colors.primary};
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  flex: 1;
`;

const CancelButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #333;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
`;
