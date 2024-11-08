import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react'; // Importamos el ícono
import { createPost } from '../services/postService';

const CreatePost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [attachments, setAttachments] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        // Si tienes archivos adjuntos, los agregas aquí
        attachments.forEach((file, index) => {
            formData.append(`attachment_${index}`, file);
        formData.append(`attachment_${index}`, file);
    });

        try {
            await createPost(formData);
            navigate('/posts'); // Redirige a la lista de posts después de crear
        } catch (error) {
            console.log('Error al crear el post', error);
        }
    };

    const handleFileChange = (event) => {
        setAttachments([...event.target.files]);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>Crear Nuevo Post</h2>
            </div>
            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título del post"
                    required
                />
            </div>
            
            <div style={styles.inputContainer}>
                <textarea
                    style={styles.textarea}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenido del post"
                    required
                />
            </div>
            <div style={styles.uploadSection}>
                <label style={styles.uploadButton}>
                    <Upload /> Adjuntar archivos
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>
            <button type="submit" style={styles.editButton}>Enviar</button>
        </form>
    );
}

const styles = {
    container: {
        backgroundColor: '#f3f3f3',
        padding: '24px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
    },
    title: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#333',
    },
    inputContainer: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '12px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '14px',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
        fontSize: '14px',
        minHeight: '120px',
        resize: 'vertical',
        outline: 'none',
    },
    editButton: {
        backgroundColor: '#22c55e',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '8px 16px',
    },
    uploadSection: {
        marginBottom: '24px',
    },
    uploadButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: '2px dashed #ccc',
        borderRadius: '6px',
        backgroundColor: 'transparent',
        color: '#666',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default CreatePost;