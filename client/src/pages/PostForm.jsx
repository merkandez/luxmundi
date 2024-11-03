import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'; // Importar PropTypes

const PostForm = ({ initialData = {}, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const handleFormSubmit = (data) => {
        console.log(data);
        onSubmit(data);
    };

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

                <button type="submit">Guardar</button>
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
    }),
    onSubmit: PropTypes.func.isRequired, // onSubmit es obligatorio y debe ser una función
};

export default PostForm;
