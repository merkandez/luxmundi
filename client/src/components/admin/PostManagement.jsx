import React, { useState } from 'react';

const PostManagement = ({ posts, selectedPost, onSelectPost, onUpdatePost, onDeletePost, onCreatePost }) => {
  const [editData, setEditData] = useState(selectedPost || {});
  const [newPostData, setNewPostData] = useState({ title: '', content: '', imageUrl: '' });

  React.useEffect(() => {
    setEditData(selectedPost || {});
  }, [selectedPost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = () => {
    onUpdatePost(selectedPost.id, editData);
  };

  const handleCreatePost = () => {
    onCreatePost(newPostData);
    setNewPostData({ title: '', content: '', imageUrl: '' });
  };

  return (
    <div>
      <h3>Publicaciones</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => onSelectPost(post)}>Editar</button>
            <button onClick={() => onDeletePost(post.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {selectedPost && (
        <div>
          <h3>Editar Publicación</h3>
          <input
            type="text"
            name="title"
            value={editData.title || ''}
            onChange={handleInputChange}
            placeholder="Título"
          />
          <textarea
            name="content"
            value={editData.content || ''}
            onChange={handleInputChange}
            placeholder="Contenido"
          />
          <button onClick={handleUpdate}>Guardar cambios</button>
        </div>
      )}

      <div>
        <h3>Crear Nueva Publicación</h3>
        <input
          type="text"
          name="title"
          value={newPostData.title}
          onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
          placeholder="Título"
        />
        <textarea
          name="content"
          value={newPostData.content}
          onChange={(e) => setNewPostData({ ...newPostData, content: e.target.value })}
          placeholder="Contenido"
        />
        <input
          type="text"
          name="imageUrl"
          value={newPostData.imageUrl}
          onChange={(e) => setNewPostData({ ...newPostData, imageUrl: e.target.value })}
          placeholder="URL de la imagen"
        />
        <button onClick={handleCreatePost}>Crear Publicación</button>
      </div>
    </div>
  );
};

export default PostManagement;
