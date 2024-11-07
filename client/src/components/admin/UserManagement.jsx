import React, { useState, useEffect } from 'react';

const UserManagement = ({ users, selectedUser, onSelectUser, onUpdateUser, onDeleteUser }) => {
  const [editData, setEditData] = useState(selectedUser || {});

  // Actualiza el formulario cuando cambia el usuario seleccionado
  useEffect(() => {
    setEditData(selectedUser || {});
  }, [selectedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateUser(selectedUser.id, editData);
  };

  return (
    <div>
      <h3>Usuarios</h3>
      {users.length === 0 ? ( // Muestra un mensaje si no hay usuarios
        <p>No hay usuarios para mostrar</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
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
            name="username"
            value={editData.username || ''}
            onChange={handleInputChange}
            placeholder="Nombre de usuario"
          />
          <input
            type="email"
            name="email"
            value={editData.email || ''}
            onChange={handleInputChange}
            placeholder="Correo electrónico"
          />
          <button onClick={handleUpdate}>Guardar cambios</button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
