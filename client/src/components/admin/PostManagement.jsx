import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uploadImage } from '../../services/postService';

const PostManagement = ({
  posts,
  selectedPost,
  onSelectPost,
  onUpdatePost,
  onDeletePost,
  onCreatePost,
}) => {
  const [editData, setEditData] = useState(selectedPost || {});
  const [newPostData, setNewPostData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    setEditData(selectedPost || {});
  }, [selectedPost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = () => {
    onUpdatePost(selectedPost.id, editData);
    setShowEditModal(false);
  };

  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    await onDeletePost(postToDelete);
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const imageData = await uploadImage(file);
      setNewPostData({ ...newPostData, imageUrl: imageData.url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleEditImageUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const imageData = await uploadImage(file);
      setEditData({ ...editData, imageUrl: imageData.url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleCreatePost = () => {
    onCreatePost(newPostData);
    setNewPostData({ title: "", content: "", imageUrl: "" });
    setShowCreateModal(false);
  };

  const handleSelectPost = (post) => {
    onSelectPost(post);
    setShowEditModal(true);
  };

  

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeWrapper>
      <TitleSection>
        <h2>Todos los post</h2>
        <div>
          <input
            type="text"
            placeholder="Buscar post"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </TitleSection>
      <StyledButton onClick={() => setShowCreateModal(true)}>Crear Post</StyledButton>
      <ExploreSection>
        <TableSection>
        <h3>Usuarios</h3>
        {posts.length === 0 ? (
          <p>No hay usuarios para mostrar</p>
        ) : (
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th width="10%">Imagen</th>



                  <th width="30%">Nombre</th>
                  <th width="30%">Email</th>
                  <th width="30%">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td data-label="Imagen"><ImagePreview src={post.imageUrl} alt="" /></td>
                    <td data-label="Nombre">{post.title}</td>

                    <td data-label="Contenido">{post.content.length > 255 ? `${post.content.substring(0, 255)}...` : post.content}</td>
                    <td data-label="Acciones">
                      <StyledButton onClick={() => handleSelectPost(post)}>Editar</StyledButton>
                      <StyledButton onClick={() => handleDeleteClick(post.id)}>Eliminar</StyledButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        )}
      </TableSection>
      </ExploreSection>

      {showEditModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowEditModal(false)}>×</CloseButton>
            <StyledForm>
              <Title>Editar Publicación</Title>
              <FormGroup>
                {editData.imageUrl && <ImagePreview src={editData.imageUrl} alt="Preview" style={{ width: '100%' }} />}
                <Label>Título</Label>
                <Input
                  type="text"
                  name="title"
                  value={editData.title || ""}
                  onChange={handleInputChange}
                  placeholder="Título"
                />
              </FormGroup>
              <FormGroup>
                <Label>Contenido</Label>
                <Textarea
                  as="textarea"
                  name="content"
                  value={editData.content || ""}
                  onChange={handleInputChange}
                  placeholder="Contenido"
                />
              </FormGroup>
              <FormGroup>
                <Label>Imagen</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleEditImageUpload}
                />
              </FormGroup>
              <StyledButton onClick={handleUpdate}>Guardar cambios</StyledButton>
            </StyledForm>
          </ModalContent>
        </Modal>
      )}

      {showCreateModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowCreateModal(false)}>×</CloseButton>
            <StyledForm>
              <Title>Crear Nueva Publicación</Title>
              <FormGroup>
                <Label>Título</Label>
                <Input
                  type="text"
                  name="title"
                  value={newPostData.title}
                  onChange={(e) =>
                    setNewPostData({ ...newPostData, title: e.target.value })
                  }
                  placeholder="Título"
                />
              </FormGroup>
                {newPostData.imageUrl && <ImagePreview src={newPostData.imageUrl} alt="Preview"  />}
              <FormGroup>
                <Label>Contenido</Label>
                <Textarea
                  as="textarea"
                  name="content"
                  value={newPostData.content}
                  onChange={(e) =>
                    setNewPostData({ ...newPostData, content: e.target.value })
                  }
                  placeholder="Contenido"
                />
              </FormGroup>
              <FormGroup>
                <Label>Imagen</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </FormGroup>
              <StyledButton onClick={handleCreatePost}>Crear Publicación</StyledButton>
            </StyledForm>
          </ModalContent>
        </Modal>
      )}

{showDeleteModal && (
        <Modal>
          <ModalContent>
            <Title>Confirmar Eliminación</Title>
            <p style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
              ¿Estás seguro de que deseas eliminar este usuario?
            </p>
            <ButtonGroup>
              <StyledButton onClick={handleConfirmDelete}>Confirmar</StyledButton>
              <StyledButton onClick={handleCancelDelete} style={{ backgroundColor: '#dc3545' }}>
                Cancelar
              </StyledButton>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}

    </HomeWrapper>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const TableSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
  
  h3 {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #29c9a9;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #24b598;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #333;
  }
  
  th {
    background-color: #333;
  }
  
  tr:hover {
    background-color: #383838;
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }
    
    tbody tr {
      display: block;
      margin-bottom: 1rem;
      border: 1px solid #333;
    }
    
    td {
      display: block;
      text-align: right;
      padding: 12px;
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #444;
    }
    
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 12px;
      font-weight: bold;
    }
    
    td:last-child {
      border-bottom: none;
    }
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 1s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalContent = styled.div`
  background-color: rgba(26, 26, 26, 1);
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const StyledForm = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #29c9a9;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;

  &:focus {
    border-color: #29c9a9;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  min-height: 150px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #ffffff;

  &:focus {
    border-color: #29c9a9;
    outline: none;
  }
`

const HomeWrapper = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 30px;
  width: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 10px;
  margin: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    color: white;
    font-size: 2rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  input {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 5px;
    background-color: #3a3a3a;
    color: white;
    font-size: 1rem;
    width: 250px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
    }

    &::placeholder {
      color: #888;
    }

    &:focus {
      outline: none;
      background-color: #444;
      box-shadow: 0 0 0 2px #666;
    }
  }
`;

const ExploreSection = styled.section`
  display: flex;
  max-width: 100%;
  overflow: hidden;
`;

const CardsContainer = styled.div`
  display: gird;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  color: black;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const InfoPost = styled.div`
  padding: 0 10px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content`

  export default PostManagement;