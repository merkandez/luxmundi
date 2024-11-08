import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'; // Importar PropTypes
import {useState } from 'react';
import { Upload, ThumbsUp } from 'lucide-react';

const PostForm = ({ initialData = {}, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const [image, setImage] = useState(null); // Estado para la imagen
  const [likes, setLikes] = useState(initialData.likes || 0); // Inicializa l

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (image) {
      formData.append("image", image); // Agrega la imagen si existe
    }
    formData.append("likes", likes); // Añade los likes al FormData
    onSubmit(formData);
  };

  // Maneja el cambio del input de imagen
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  // Maneja el clic en el botón de "me gusta"
  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1); // Incrementa el número de likes
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "auto",
      padding: "24px",
      backgroundColor: "#f3f3f3",
      borderRadius: "8px",
    },
    field: { marginBottom: "16px" },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ddd",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      minHeight: "120px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      backgroundColor: "#4CAF50",
      color: "white",
    },
    likeSection: { display: "flex", alignItems: "center", marginTop: "10px" },
    likeButton: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "16px",
      color: "#666",
    },
    attachment: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontSize: "16px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
        <h2>{initialData.id ? 'Editar Post' : 'Crear Nuevo Post'}</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div style={styles.field}>
                <label htmlFor="title">Título</label>
                <input
                    id="title"
                    {...register('title', {
                        required: 'El título es obligatorio',
                        maxLength: { value: 100, message: 'Máximo 100 caracteres' },
                    })}
                    style={styles.input}
                    placeholder="Título del post"
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div style={styles.field}>
                <label htmlFor="content">Contenido</label>
                <textarea
                    id="content"
                    {...register('content', {
                        required: 'El contenido es obligatorio',
                        minLength: { value: 10, message: 'El contenido debe tener al menos 10 caracteres' },
                    })}
                    style={styles.textarea}
                    placeholder="Contenido del post"
                />
                {errors.content && <p>{errors.content.message}</p>}
            </div>

            <div style={styles.field}>
                <label htmlFor="image">Subir Imagen</label>
                <div style={styles.attachment}>
                    <Upload size={16} />
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="image" style={{ cursor: 'pointer' }}>Seleccionar archivo</label>
                </div>
            </div>

            <button type="submit" style={styles.button}>Enviar</button>

            <div style={styles.likeSection}>
                <button type="button" onClick={handleLikeClick} style={styles.likeButton}>
                    <ThumbsUp size={16} /> <span style={{ marginLeft: '5px' }}>{likes}</span>
                </button>
            </div>
        </form>
    </div>
);
};

// Definición de PropTypes para validar las props
PostForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string, // o PropTypes.number si 'id' es numérico
    title: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number, // Agrega likes a las props
  }),
  onSubmit: PropTypes.func.isRequired, // onSubmit es obligatorio y debe ser una función
};
export default PostForm;