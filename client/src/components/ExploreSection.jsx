import styled from "styled-components";
import React, { useEffect, useState } from "react";
//import { getPosts } from "../services/api"; // Importa la función de API
import Card from "./Card"; // Importa el componente Card para mostrar cada post
import CardsContainer from "./CardContainer";
import Pagination from "./Pagination"; //Llamar solo a pagination
import {getAllPosts} from "..Controllers/postController"

const ExploreSection = () => {
  // Crea un estado para guardar los posts obtenidos
  const [posts, setPosts] = useState([]); // Post originales
  const [filteredPosts, setFilteredPosts] = useState([]); //post filtrados
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el texto de búsqueda

  useEffect(() => {
  // Este hook se ejecuta. carga los posts cuando el componente se muestra
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts(); // Llama a la API para obtener los posts
        setPosts(data); // Guarda los posts en el estado original
        setFilteredPosts(data); //Inicialmente, los post filtrados son todos
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Llama a la función para cargar los posts
  }, []); // [] asegura que solo se ejecute una vez al cargar

  //Maneja el cambio en el campo de búsqueda
  const handleSearch =(e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);//actualiza el estado del texto de búsqueda

    //Filtra los posts basándose en el Título  o palabras.
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)

    );
    setFilteredPosts(filtered); //Actualiza el estado de los posts filtrados
  }

  return (
    <SectionWrapper>
      <h2>Explore Posts</h2>
      <p>Descubre nuestras últimas publicaciones.</p>

     {/* DESDE AQUI Campo de búsquedad */}
      <input 
         type="text"
         placeholder="Buscar las publicaciones..."
         value={searchQuery}
         onChange={handleSearch}  
     />
           

      <CardsContainer>
        {/* Mapea cada post y lo muestra en un componente Card */}
        {filteredPosts.map((post) => (
          <Card 
          key={post.id} 
          id={post.id}
          title={post.title} 
          content={post.content} />
        ))}
      </CardsContainer>
      <Pagination /> {/* Llamar solo a Pagination */}
    </SectionWrapper>
  );
};



// Estilos para la sección
const SectionWrapper = styled.section`
  background-color: #2c2c2c;
  color: #ffffff;
  padding: 64px 64px 146px;
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

  /* Estilos para el campo de búsqueda */
  input {
    padding: 10px;
    width: 80%;
    max-width: 400px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
  }


  @media (max-width: 768px) { 
  padding: 20px 12px; 
  h2 { font-size: 1.5rem; 
  } 
  p { 
  font-size: 0.9rem; 
  } 
  
`;

export default ExploreSection;