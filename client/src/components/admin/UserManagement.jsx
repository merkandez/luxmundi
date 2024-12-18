import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uploadImage } from '../../services/postService';
import ConfirmationModal from '../ConfirmationModal';

const UserManagement = ({
  users,
  selectedUser,
  reloadUsers,
  onSelectUser,
  onUpdateUser,
  onDeleteUser,
  onCreateUser,
}) => {
  const [editData, setEditData] = useState(selectedUser || {});
  const [newUserData, setNewUserData] = useState({
    username: '',
    email: '',
    password: '',
    avatarUrl: '',
    role: 'user',
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  useEffect(() => {
    setEditData(selectedUser || {});
    if (selectedUser) {
      setShowEditModal(true);
    }
  }, [selectedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const validateInputs = (data) => {
    const { username, email, password } = data;
    if (!username || !email || (showCreateModal && !password)) {
      return false;
    }
    return true;
  };

  const handleUpdate = async () => {
    if (!validateInputs(editData)) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    const updateData = { ...editData };
    if (editData.avatarUrl) {
      updateData.avatarUrl = editData.avatarUrl;
    }
    await onUpdateUser(selectedUser.id, updateData);
    await reloadUsers();
    setShowEditModal(false);
    setConfirmationMessage(
      `El usuario "${editData.username}" ha sido actualizado.`
    );
    setIsConfirmationOpen(true);
  };

  const handleCreateUser = async () => {
    if (!validateInputs(newUserData)) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    await onCreateUser(newUserData);
    await reloadUsers();
    setNewUserData({
      username: '',
      email: '',
      password: '',
      avatarUrl: '',
      role: 'user',
    });
    setShowCreateModal(false);
    setConfirmationMessage(
      `El usuario "${newUserData.username}" ha sido creado.`
    );
    setIsConfirmationOpen(true);
  };

  const handleDeleteClick = (userId) => {
    setUserToDelete(userId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    await onDeleteUser(userToDelete);
    await reloadUsers();
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const imageData = await uploadImage(file);
      setNewUserData({ ...newUserData, avatarUrl: imageData.url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleEditImageUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const imageData = await uploadImage(file);
      setEditData({ ...editData, avatarUrl: imageData.url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <ManagementWrapper>
      <FormSection>
        <p>Total de usuarios: {users.length}</p>
        <h3>Gestión de Usuarios</h3>
        <StyledButton onClick={() => setShowCreateModal(true)}>
          Crear Nuevo Usuario
        </StyledButton>
      </FormSection>

      <TableSection>
        <h3>Usuarios</h3>
        {users.length === 0 ? (
          <p>No hay usuarios para mostrar</p>
        ) : (
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td data-label='Nombre'>{user.username}</td>
                    <td data-label='Email'>{user.email}</td>
                    <td data-label='Acciones'>
                      <StyledButton onClick={() => onSelectUser(user)}>
                        Editar
                      </StyledButton>
                      <DeleteButton onClick={() => handleDeleteClick(user.id)}>
                        Eliminar
                      </DeleteButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        )}
      </TableSection>

      {showEditModal && selectedUser && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowEditModal(false)}>×</CloseButton>
            <StyledForm>
              <Title>Editar Usuario</Title>
              <FormGroup>
                {editData.avatarUrl && (
                  <ImagePreview src={editData.avatarUrl} alt='Preview' />
                )}
                <Label>Nombre de Usuario</Label>
                <Input
                  type='text'
                  name='username'
                  value={editData.username || ''}
                  onChange={handleInputChange}
                  placeholder='Nombre de usuario'
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={editData.email || ''}
                  onChange={handleInputChange}
                  placeholder='Email'
                />
              </FormGroup>
              <FormGroup>
                <Label>Rol</Label>
                <Select
                  name='role'
                  value={editData.role || 'user'}
                  onChange={handleInputChange}
                >
                  <option value='user'>Usuario</option>
                  <option value='admin'>Administrador</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Imagen de perfil</Label>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={handleEditImageUpload}
                />
              </FormGroup>
              <StyledButton onClick={handleUpdate}>
                Guardar cambios
              </StyledButton>
            </StyledForm>
          </ModalContent>
        </Modal>
      )}

      {showCreateModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowCreateModal(false)}>
              ×
            </CloseButton>
            <StyledForm>
              <Title>Crear Nuevo Usuario</Title>
              <FormGroup>
                {newUserData.avatarUrl && (
                  <ImagePreview src={newUserData.avatarUrl} alt='Preview' />
                )}
                <Label>Nombre de Usuario</Label>
                <Input
                  type='text'
                  name='username'
                  value={newUserData.username}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, username: e.target.value })
                  }
                  placeholder='Nombre de usuario'
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={newUserData.email}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, email: e.target.value })
                  }
                  placeholder='Email'
                />
              </FormGroup>
              <FormGroup>
                <Label>Contraseña</Label>
                <Input
                  type='password'
                  name='password'
                  value={newUserData.password}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, password: e.target.value })
                  }
                  placeholder='Contraseña'
                />
              </FormGroup>
              <FormGroup>
                <Label>Rol</Label>
                <Select
                  name='role'
                  value={newUserData.role}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, role: e.target.value })
                  }
                >
                  <option value='user'>Usuario</option>
                  <option value='admin'>Administrador</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Imagen de perfil</Label>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                />
              </FormGroup>
              <StyledButton onClick={handleCreateUser}>
                Crear Usuario
              </StyledButton>
            </StyledForm>
          </ModalContent>
        </Modal>
      )}

      {showDeleteModal && (
        <Modal>
          <ModalContent>
            <Title>Confirmar Eliminación</Title>
            <p
              style={{
                color: 'white',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              ¿Estás seguro de que deseas eliminar este usuario?
            </p>
            <ButtonGroup>
              <StyledButton onClick={handleConfirmDelete}>
                Confirmar
              </StyledButton>
              <StyledButton
                onClick={handleCancelDelete}
                style={{ backgroundColor: '#dc3545' }}
              >
                Cancelar
              </StyledButton>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        message={confirmationMessage}
        showButtons={false}
      />
    </ManagementWrapper>
  );
};

// Estilos

const ManagementWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 30px;
  color: white;
  overflow-x: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const FormSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TableSection = styled.div`
  margin-bottom: 30px;
  width: 100%;

  h3 {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #29c9a9;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #24b598;
  }
`;

// Botón de eliminación con color rojo claro
const DeleteButton = styled(StyledButton)`
  background-color: #bd3234fd; /* Rojo claro */
  color: #fff;

  &:hover {
    background-color: #f55050; /* Más claro al hacer hover */
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  th {
    background-color: #333;
  }

  tr:hover {
    background-color: #383838;
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }

    tbody tr {
      display: block;
      margin-bottom: 1rem;
      border: 1px solid #333;
    }

    td {
      display: block;
      text-align: right;
      padding: 12px;
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #444;
    }

    td:before {
      content: attr(data-label);
      position: absolute;
      left: 12px;
      font-weight: bold;
    }

    td:last-child {
      border-bottom: none;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalContent = styled.div`
  background-color: rgba(26, 26, 26, 1);
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const StyledForm = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #29c9a9;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;

  &:focus {
    border-color: #29c9a9;
    outline: none;
  }
`;

const ImagePreview = styled.img`
  width: 35%; /* Ajusta según tu diseño */
  aspect-ratio: 1; /* Mantiene la proporción de 1:1 para un cuadrado */
  border-radius: 50%; /* Hace la imagen circular */
  margin: 0 auto; /* Centra la imagen en el contenedor */
  object-fit: cover; /* Ajusta la imagen dentro del contenedor sin distorsión */
  margin-bottom: 10px;
`;
const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;

  &:focus {
    border-color: #29c9a9;
    outline: none;
  }
`;

export default UserManagement;
