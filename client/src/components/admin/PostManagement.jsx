import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    setNewPostData({ title: "", content: "", imageUrl: "" });
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
        <input
          type="text"
          placeholder="Buscar post"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </TitleSection>

      <ExploreSection>
        <CardsContainer>
          {filteredPosts.map((post) => (
            <Card key={post.id}>
              <Img src={post.imageUrl} alt={post.title} />
              <InfoPost>
                <h3>{post.title}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem in earum culpa, maiores voluptates ad minima porro
                  dolorem! Voluptas nostrum quidem commodi quas aliquam sed
                  iusto velit ipsum deleniti. Enim.
                </p>
              </InfoPost>
              <Buttons>
                <Button onClick={() => onSelectPost(post)}>Editar</Button>
                <Button onClick={() => onDeletePost(post.id)}>Eliminar</Button>
              </Buttons>
            </Card>
          ))}
        </CardsContainer>
      </ExploreSection>

      {selectedPost && (
        <div>
          <h3>Editar Publicación</h3>
          <input
            type="text"
            name="title"
            value={editData.title || ""}
            onChange={handleInputChange}
            placeholder="Título"
          />
          <textarea
            name="content"
            value={editData.content || ""}
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
          onChange={(e) =>
            setNewPostData({ ...newPostData, title: e.target.value })
          }
          placeholder="Título"
        />
        <textarea
          name="content"
          value={newPostData.content}
          onChange={(e) =>
            setNewPostData({ ...newPostData, content: e.target.value })
          }
          placeholder="Contenido"
        />
        <input
          type="text"
          name="imageUrl"
          value={newPostData.imageUrl}
          onChange={(e) =>
            setNewPostData({ ...newPostData, imageUrl: e.target.value })
          }
          placeholder="URL de la imagen"
        />
        <button onClick={handleCreatePost}>Crear Publicación</button>
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 30px;
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
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  border: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  border: none;
`;

export default PostManagement;
