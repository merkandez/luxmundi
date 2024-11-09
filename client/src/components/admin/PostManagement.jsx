import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PostManagement = ({ posts, selectedPost, onSelectPost, onUpdatePost, onDeletePost, onCreatePost }) => {
  const [editData, setEditData] = useState(selectedPost || {});
  const [newPostData, setNewPostData] = useState({ title: '', content: '', imageUrl: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TitleSection>
      <h2>Todos los post</h2>
      <input 
        type="text" 
        placeholder='Buscar post' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </TitleSection>

      
      <List>
        {filteredPosts.map((post) => (
          <Item key={post.id}>
            <Img src={post.imageUrl} alt={post.title} />
            <InfoPost>
            <TitlePost>{post.title}</TitlePost>
            <TextPost>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in earum culpa, maiores voluptates ad minima porro dolorem! Voluptas nostrum quidem commodi quas aliquam sed iusto velit ipsum deleniti. Enim.</TextPost>
            </InfoPost>
            <Buttons>
            <Button onClick={() => onSelectPost(post)}>Editar</Button>
            <Button onClick={() => onDeletePost(post.id)}>Eliminar</Button>
            </Buttons>
          </Item>
        ))}
      </List>

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


const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
  padding: 0;
`

const Item= styled.li`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`

const InfoPost = styled.div`
  padding:0 10px;
`

const TitlePost = styled.h3`

`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  border:none
  box-sizing: border-box;
`

const TextPost = styled.p`
  margin-top: -.5rem;
  max-height: 90px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Button = styled.button`
  width: 50%;
  height: 40px;
  border:none;
`