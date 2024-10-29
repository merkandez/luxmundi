/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//import React from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ initialData , onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Título</label>
        <input
          {...register('title', { required: 'El título es obligatorio',
            maxLength: { value: 100, message: 'Máximo 100 caracteres' } 
          })}
          placeholder="Título del post"
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="content">Contenido</label>
        <textarea 
        id="content"
          {...register('content', { required: 'El contenido es obligatorio',
            minLength: { value: 10, message: 'El contenido debe tener al menos 10 caracteres' } 
          })}
          placeholder="Contenido del post"
        />
        {errors.content && <p>{errors.content.message}</p>}
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default PostForm;
