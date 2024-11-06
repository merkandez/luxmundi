import React from 'react';

const UserManagement = ({
  users,
  /* onUpdateUser, */
  onDeleteUser,
  onSelectUser,
}) => {
  return (
    <div>
      <h3>Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.role}
            <button onClick={() => onSelectUser(user)}>Editar</button>
            <button onClick={() => onDeleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
