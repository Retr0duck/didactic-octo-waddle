// UserComponent.js
import React from 'react';
import { useSelector } from 'react-redux';

const UserComponent = () => {
  // Selecciona el usuario del estado de Redux
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No hay usuario registrado.
        La consola detectara usuarios.</p>
      )}
    </div>
  );
};

export default UserComponent;
