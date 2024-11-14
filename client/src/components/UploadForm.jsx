import React, { useState } from 'react';

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [uploadResult, setUploadResult] = useState(null); // Para mostrar el resultado de la subida

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      console.error('No se ha seleccionado ninguna imagen');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta al subir la imagen');
      }

      const data = await response.json();
      setUploadResult(data); // Guarda el resultado para mostrar el enlace o el mensaje
      console.log(data); // Muestra el resultado de la subida
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} accept="image/*" />
      <button type="submit">Subir Imagen</button>
      {uploadResult && (
        <div>
          <p>Imagen subida con éxito:</p>
          <a href={uploadResult.url} target="_blank" rel="noopener noreferrer">
            Ver imagen
          </a>
        </div>
      )}
    </form>
  );
};

export default UploadForm;
