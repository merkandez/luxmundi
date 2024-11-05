// src/pages/AdminPage.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchUsers, updateUserRole, deleteUser } from '../services/adminService';

const AdminPage = () => {
  // Estado para almacenar la lista de usuarios y otros datos que el admin gestionará
  const [users, setUsers] = useState([]);

  // Obtener los datos de los usuarios al cargar la página
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    loadUsers();
  }, []);

  // Función para actualizar el rol de un usuario
  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole);
      // Actualizar el estado local después de cambiar el rol
      setUsers(users.map(user => (user.id === userId ? { ...user, role: newRole } : user)));
    } catch (error) {
      console.error('Error al actualizar rol:', error);
    }
  };

  // Función para eliminar un usuario
  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      // Actualizar el estado local después de eliminar un usuario
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <AdminContainer>
      <h1>Admin Panel</h1>
      <UserList>
        <h2>Gestión de Usuarios</h2>
        {users.map((user) => (
          <UserItem key={user.id}>
            <span>{user.username} - {user.role}</span>
            <select onChange={(e) => handleRoleChange(user.id, e.target.value)} value={user.role}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <DeleteButton onClick={() => handleDeleteUser(user.id)}>Eliminar</DeleteButton>
          </UserItem>
        ))}
      </UserList>
    </AdminContainer>
  );
};

export default AdminPage;

// Estilos
const AdminContainer = styled.div`
  padding: 2rem;
`;

const UserList = styled.div`
  margin-top: 1rem;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
