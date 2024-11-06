import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'; // Importar PropTypes
import {useState } from 'react';

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
        formData.append('title', data.title);
        formData.append('content', data.content);
        if (image) {
            formData.append('image', image); // Agrega la imagen si existe
        }
        formData.append('likes', likes); // Añade los likes al FormData
        onSubmit(formData);        
    };

     // Maneja el cambio del input de imagen
     const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
     // Maneja el clic en el botón de "me gusta"
     const handleLikeClick = () => {
        setLikes((prevLikes) => prevLikes + 1); // Incrementa el número de likes
     }
     
    return (
        <div>
            <h1>{initialData.id ? 'Editar Post' : 'Crear Nuevo Post'}</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input
                        id="title"
                        {...register('title', {
                            required: 'El título es obligatorio',
                            maxLength: { value: 100, message: 'Máximo 100 caracteres' },
                        })}
                        placeholder="Título del post"
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>

                <div>
                    <label htmlFor="content">Contenido</label>
                    <textarea
                        id="content"
                        {...register('content', {
                            required: 'El contenido es obligatorio',
                            minLength: { value: 10, message: 'El contenido debe tener al menos 10 caracteres' },
                        })}
                        placeholder="Contenido del post"
                    />
                    {errors.content && <p>{errors.content.message}</p>}
                </div>

                <div>
                    <label htmlFor="image">Subir Imagen</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <button type="submit">Enviar</button>
                {/* Botón de like */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <button type="button" onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
                        👍
                    </button>
                    <span style={{ marginLeft: '5px' }}>{likes}</span>
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