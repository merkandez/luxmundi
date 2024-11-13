import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ImageContentPanel from '../components/ImageContentPanel';
import ContentSection from '../components/ContentSection';
import LikeButton from '../components/LikeButton';
import { fetchPostById } from '../services/postService';

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
      <HeroSection title={post.title} subtitle="Detalles del artículo" />
      <ImageContentPanel imageUrl={post.imageUrl} />
      <ContentSection 
        content={{
          heading: post.title,
          subheading: post.subtitle || '',
          text: post.content,
          additionalText: post.additionalContent || '',
        }}
      />
       <LikeButton initialLikes={post.likes} postId={postId} /> 
        </>
  );
};

export default ArticlePage;
