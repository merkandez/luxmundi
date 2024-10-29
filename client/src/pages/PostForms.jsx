/* eslint-disable react/prop-types */
//import React from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ initialData = {}, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Título</label>
        <input
          {...register('title', { required: 'El título es obligatorio' })}
          placeholder="Título del post"
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label>Contenido</label>
        <textarea
          {...register('content', { required: 'El contenido es obligatorio' })}
          placeholder="Contenido del post"
        />
        {errors.content && <p>{errors.content.message}</p>}
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default PostForm;
