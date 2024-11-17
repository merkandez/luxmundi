import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ImageContentPanel from '../components/ImageContentPanel';
import ContentSection from '../components/ContentSection';
import { fetchPostById } from '../services/postService';
import FavoriteButton from "../components/FavoriteButton";


const ArticlePage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await fetchPostById(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error al cargar el post:', error);
      }
    };

    loadPost();
  }, [postId]);

  if (!post) {
    return <div>Cargando post...</div>;
  }

  return (
    <>
      <HeroSection title={post.title} />
      <ImageContentPanel imageUrl={post.imageUrl} />
      <FavoriteButton
        initialFavorites={post.likes} // Total inicial de likes
        postId={postId} // ID del post
        onFavorite={(id, updatedLikes) => {
          console.log(`Post ${id} ahora tiene ${updatedLikes} favoritos.`);
        }}
      />
      
      <ContentSection
        content={{
          heading: post.title,
          subheading: post.subtitle || '',
          text: post.content,
          
        }}
      />
      
    </>
  );
};

export default ArticlePage;
