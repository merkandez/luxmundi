import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api"; // Importa la función de API
import Card from "./Card"; // Importa el componente Card para mostrar cada post
import CardsContainer from "./CardContainer"

const ExploreSection = () => {
  // Crea un estado para guardar los posts obtenidos
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Este hook se ejecuta al cargar el componente y llama a la API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Llama a la API
        setPosts(data); // Guarda los posts en el estado
        setFilteredPosts(data); //Inicialmente, post filtrador son todos
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Llama a la función
  }, []); // [] asegura que solo se ejecute una vez al cargar

  return (
    <SectionWrapper>
      <h2>Explore Posts</h2>
      <p>Descubre nuestras últimas publicaciones.</p>
      <CardsContainer>
        {/* Mapea cada post y lo muestra en un componente Card */}
        {posts.map((post) => (
          <Card 
          key={post.id} 
          title={post.title} 
          content={post.content} />
        ))}
      </CardsContainer>
    </SectionWrapper>
  );
};



// Estilos para la sección
const SectionWrapper = styled.section`
  background-color: #2c2c2c;
  color: #ffffff;
  padding: 40px 24px;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: #aaaaaa;
    margin-bottom: 24px;
  }
  @media (max-width: 768px) { 
  padding: 20px 12px; 
  h2 { font-size: 1.5rem; 
  } 
  p { 
  font-size: 0.9rem; 
  } 
  } 
`;

export default ExploreSection;