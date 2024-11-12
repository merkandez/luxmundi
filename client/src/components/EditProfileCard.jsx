import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';

const EditProfileCard = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    username: initialData?.username || '',
    email: initialData?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    avatar: initialData?.avatar || null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    onSave(formData);
  };

  return (
    <CardContainer>
      <AvatarContainer>
        <AvatarPreview src={formData.avatar || '/default-avatar.png'} alt="Avatar" />
        <EditIcon onClick={() => document.getElementById('avatarInput').click()}>
          <FiEdit2 size={18} />
        </EditIcon>
        <AvatarInput
          type="file"
          accept="image/*"
          id="avatarInput"
          onChange={handleAvatarChange}
          style={{ display: 'none' }}
        />
      </AvatarContainer>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <PasswordSection>
          <h3>Change Password</h3>
          <FormGroup>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
        </PasswordSection>

        <ButtonGroup>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
          <SaveButton type="submit">Save Changes</SaveButton>
        </ButtonGroup>
      </Form>
    </CardContainer>
  );
};

export default EditProfileCard;

// Estilos
const CardContainer = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  width: 90%;
  max-width: 450px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #333;
  text-align: center;
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const AvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border: 2px solid #333;
`;

const EditIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #29c9a9;
  border-radius: 50%;
  padding: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #20a088;
  }
`;

const AvatarInput = styled.input``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  color: #fff;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #2a2a2a;
  border: 1px solid #333;
  border-radius: 6px;
  color: #fff;
  font-size: 0.9rem;
  margin-top: 0.25rem;

  &:focus {
    border-color: #29c9a9;
  }
`;

const PasswordSection = styled.div`
  border-top: 1px solid #333;
  padding-top: 1.5rem;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SaveButton = styled.button`
  background: #29c9a9;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  flex: 1;

  &:hover {
    background: #20a088;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #333;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  flex: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
