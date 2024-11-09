import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import RegisterForm from '../auth/RegisterForm';

const UserManagement = ({ users, selectedUser,reloadUsers, onSelectUser, onUpdateUser, onDeleteUser,}) => {
  const [editData, setEditData] = useState(selectedUser || {});
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleUpdate = async () => {
    await onUpdateUser(selectedUser.id, editData);
    await reloadUsers();
    setShowEditModal(false);
  };

  const handleRegisterSuccess = async () => {
    await reloadUsers();
    setShowRegisterModal(false);
  };

  return (
    <ManagementWrapper>
      <FormSection>
        <p>Total de usuarios: {users.length}</p>
        <h3>Gestión de Usuarios</h3>
        <StyledButton onClick={() => setShowRegisterModal(true)}>Crear Nuevo Usuario</StyledButton>
        {showRegisterModal && (
          <ModalOverlay>
            <ModalContent>
              <RegisterForm 
                onClose={() => setShowRegisterModal(false)}
                onSuccess={handleRegisterSuccess}
              />
            </ModalContent>
          </ModalOverlay>
        )}
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
                    <td data-label="Nombre">{user.username}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Acciones">
                      <StyledButton onClick={() => onSelectUser(user)}>Editar</StyledButton>
                      <StyledButton onClick={() => onDeleteUser(user.id)}>Eliminar</StyledButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        )}
      </TableSection>

      {showEditModal && selectedUser && (
        <ModalOverlay>
          <ModalContent>
            <h3>Editar Usuario</h3>
            <StyledInput
              type="text"
              name="nombre"
              value={editData.username || ''}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
            <StyledInput
              type="email"
              name="email"
              value={editData.email || ''}
              onChange={handleInputChange}
              placeholder="Correo electrónico"
            />
            <StyledInput
              type="text"
              name="avatarUrl"
              value={editData.avatarUrl || ''}
              onChange={handleInputChange}
              placeholder="URL de la imagen"
            />
            <StyledButton onClick={handleUpdate}>Guardar cambios</StyledButton>
            <StyledButton onClick={() => setShowEditModal(false)}>Cancelar</StyledButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ManagementWrapper>
  );
};

const ManagementWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 30px;
  color: white;
  overflow-x: hidden;
`;

const FormSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  juscontent: center;
  
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

const StyledInput = styled.input`
  padding: 8px;
  margin: 5px;
  border: 1px solid #333;
  background-color: #2a2a2a;
  color: white;
  width: 100%
  border-radius: 4px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  margin: 5px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;
  
  th, td {
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

export default UserManagement;