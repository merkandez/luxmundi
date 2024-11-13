import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ImageContentPanel from '../components/ImagenContent';
import ContentSection from '../components/ContentSection';
import Pagination from "../components/Pagination";
import { getPostsId } from '../services/postService';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  // Obtén el ID del post desde la URL
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: ''
  });
  
  const  { postId } = useParams();
  useEffect(() => {
    const loadPost = async () => {
      try {
          const data = await getPostsId(postId);
          console.log('Datos del post:', data); // Verifica los datos aquí
          setPost(data);
      } catch (error) {
          console.error('Error loading post:', error);
      }
  };
      if (postId) {
      loadPost();
      }
  }, [postId]); // Agrega postId como dependencia para ejecutar el efecto cuando cambie
    
  return (
    <>
      <HeroSection />
      {post.title ? (
      <>
        <h1>{post.title}</h1>
        <ImageContentPanel post={post} />
        <ContentSection content={post.content}/>
      </>
    ) : (
      <p>No hay contenido disponible</p>
    )}
      <Pagination />
    </>
  );
};
  
export default ArticlePage;