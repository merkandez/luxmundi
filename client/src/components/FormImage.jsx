import React, { useState } from 'react';
import { uploadImage } from '../../services/postService';

const FormImage = ({ onAvatarUpload }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  // Maneja la selección de archivos y muestra una vista previa
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file)); // Vista previa
      setAvatarFile(file); // Guarda el archivo para subir
    }
  };

  // Función para subir la imagen del avatar
  const handleUploadAvatar = async () => {
    if (!avatarFile) {
      alert("Selecciona una imagen de avatar para subir.");
      return;
    }

    try {
      const uploadResult = await uploadImage(avatarFile); // Sube el archivo a Cloudinary y recibe la URL
      onAvatarUpload(uploadResult.url); // Devuelve la URL subida al componente padre
      alert("Avatar subido exitosamente");
    } catch (error) {
      console.error("Error al subir el avatar:", error);
      alert("Error al subir el avatar");
    }
  };

  return (
    <div>
      <label>Sube tu Avatar:</label>
      <input type="file" accept="image/*" onChange={handleAvatarChange} />

      {avatarPreview && (
        <div>
          <img src={avatarPreview} alt="Vista previa de avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          <button type="button" onClick={handleUploadAvatar}>
            Subir Avatar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormImage;
