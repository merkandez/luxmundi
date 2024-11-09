import React, { useState, useEffect } from 'react';

const UserManagement = ({ users, selectedUser, onSelectUser, onUpdateUser, onDeleteUser, onCreateUser }) => {
  const [editData, setEditData] = useState(selectedUser || {});
  const [newUser, setNewUser] = useState({
    password: '',
    email: '',
    nombre: '',
    avatarUrl: ''
  });

  useEffect(() => {
    setEditData(selectedUser || {});
  }, [selectedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreate = () => {
    onCreateUser(newUser);
    setNewUser({ password: '', email: '', nombre: '', avatarUrl: '' });
  };

  const handleUpdate = () => {
    onUpdateUser(selectedUser.id, editData);
  };

  return (
    <div>
      <div>
        <h3>Crear Nuevo Usuario</h3>
        <input
          type="text"
          name="nombre"
          value={newUser.nombre}
          onChange={handleNewUserInputChange}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleNewUserInputChange}
          placeholder="Correo electrónico"
        />
        <input
          type="text"
          name="avatarUrl"
          value={newUser.avatarUrl}
          onChange={handleNewUserInputChange}
          placeholder="URL de la imagen"
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleNewUserInputChange}
          placeholder="Contraseña"
        />
        <button onClick={handleCreate}>Crear Usuario</button>
      </div>

      <h3>Usuarios</h3>

      {users.length === 0 ? (
        <p>No hay usuarios para mostrar</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.nombre} - {user.email}
              <button onClick={() => onSelectUser(user)}>Editar</button>
              <button onClick={() => onDeleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      {selectedUser && (
        <div>
          <h3>Editar Usuario</h3>
          <input
            type="text"
            name="nombre"
            value={editData.nombre || ''}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <input
            type="email"
            name="email"
            value={editData.email || ''}
            onChange={handleInputChange}
            placeholder="Correo electrónico"
          />
          <input
            type="text"
            name="avatarUrl"
            value={editData.avatarUrl || ''}
            onChange={handleInputChange}
            placeholder="URL de la imagen"
          />
          <button onClick={handleUpdate}>Guardar cambios</button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;