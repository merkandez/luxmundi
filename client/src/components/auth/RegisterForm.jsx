import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí se enviarán los datos al backend
    onClose(); // Cierra el modal después del registro exitoso
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            {...register('username', { required: 'Este campo es obligatorio' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type='email'
            {...register('email', { required: 'Este campo es obligatorio' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type='password'
            {...register('password', { required: 'Este campo es obligatorio' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
