import React, { useState } from 'react';

const PostManagement = ({
  posts,
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  onSelectPost,
}) => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  const handleCreate = () => {
    onCreatePost(newPost);
    setNewPost({ title: '', content: '', imageUrl: '' });
  };

  return (
    <div>
      <h3>Publicaciones</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <button onClick={() => onSelectPost(post)}>Editar</button>
            <button onClick={() => onDeletePost(post.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <h4>Crear nueva publicación</h4>
        <input
          type='text'
          placeholder='Título'
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder='Contenido'
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type='text'
          placeholder='URL de la imagen'
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
        />
        <button onClick={handleCreate}>Crear publicación</button>
      </div>
    </div>
  );
};

export default PostManagement;
