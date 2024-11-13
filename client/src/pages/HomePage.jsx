import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LuxMundiHero from '../components/LuxMundiHero';
import ExploreSection from '../components/ExploreSection';
import LogoutButton from '../components/LogoutButton';
import { fetchPosts } from '../services/postService';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los posts desde la base de datos
  const loadPosts = async () => {
    try {
      const fetchedPosts = await fetchPosts(true); // Cambia a false si necesitas todos los detalles
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error al cargar los posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <HomeWrapper>
      <LuxMundiHero />
      <LogoutButton />
      {loading ? (
        <LoadingMessage>Cargando destinos...</LoadingMessage>
      ) : (
        <ExploreSection cards={posts} />
      )}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

const LoadingMessage = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
`;

export default HomePage;


//Código reservado para cuando tengamos imágenes y que se muestren solo los post en los que todos los campos esten completos, evitando posibles errores
/* import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LuxMundiHero from '../components/LuxMundiHero';
import ExploreSection from '../components/ExploreSection';
import LogoutButton from '../components/LogoutButton';
import { fetchPosts } from '../services/postService';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        const validPosts = data.filter(post => post.title && post.description && post.imageUrl);
        setPosts(validPosts);
      } catch (err) {
        setError('Error al cargar los posts');
        console.error('Error al cargar los posts:', err);
      }
    };

    loadPosts();
  }, []);

  return (
    <HomeWrapper>
      <LuxMundiHero />
      <LogoutButton />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ExploreSection cards={posts} />
      )}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export default HomePage;
 */