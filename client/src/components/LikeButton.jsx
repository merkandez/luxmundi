import React, { useState } from "react";
import styled from "styled-components";
import { getPostById, updatePostLikes } from "../services/postService"; // Importa los servicios correctos

const LikeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLikeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  svg {
    fill: ${(props) => (props.liked ? "#ff0000" : "#A3A3A3")}; // Cambia el color dinámicamente
    width: 24px;
    height: 22px;
  }
`;

const LikesCount = styled.span`
  margin-left: 8px;
  font-size: 1.25rem;
`;

const LikeButton = ({ initialLikes, postId, onLike }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = async () => {
    const updatedLikes = liked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setLiked(!liked);

    try {
      // Obtiene el post actual
      const post = await getPostById(postId);
      // Actualiza los likes en el post
      const updatedPost = { ...post, likes: updatedLikes };
      await updatePostLikes(postId, updatedPost);

      // Llama a la función onLike para actualizar el estado en el componente padre
      if (onLike) {
        onLike(postId, updatedLikes);
      }
    } catch (error) {
      console.error("Error al actualizar los likes:", error);
    }
  };

  return (
    <LikeButtonWrapper>
      <StyledLikeButton onClick={toggleLike} liked={liked}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22">
          <path d="M17.4545 0C15.1636 0 13.1716 1.10805 12 2.96493C10.8284 1.10805 8.83636 0 6.54545 0C4.81011 0.00216767 3.14642 0.742506 1.91935 2.05861C0.692279 3.37471 0.00202103 5.15911 0 7.02035C0 10.4369 1.98545 13.9927 5.90182 17.5872C7.69643 19.2273 9.63493 20.6771 11.6902 21.9164C11.7854 21.9713 11.8919 22 12 22C12.1081 22 12.2146 21.9713 12.3098 21.9164C14.3651 20.6771 16.3036 19.2273 18.0982 17.5872C22.0145 13.9927 24 10.4369 24 7.02035C23.998 5.15911 23.3077 3.37471 22.0807 2.05861C20.8536 0.742506 19.1899 0.00216767 17.4545 0ZM12 20.4889C10.2098 19.3809 1.30909 13.5399 1.30909 7.02035C1.31053 5.5313 1.86269 4.10367 2.84438 3.05075C3.82608 1.99783 5.15713 1.40562 6.54545 1.40407C8.75782 1.40407 10.6156 2.67124 11.3945 4.71183C11.4439 4.84059 11.5278 4.95072 11.6356 5.02822C11.7434 5.10573 11.8702 5.14711 12 5.14711C12.1298 5.14711 12.2566 5.10573 12.3644 5.02822C12.4723 4.95072 12.5561 4.84059 12.6055 4.71183C13.3844 2.67124 15.2422 1.40407 17.4545 1.40407C18.8429 1.40562 20.1739 1.99783 21.1556 3.05075C22.1373 4.10367 22.6895 5.5313 22.6909 7.02035C22.6909 13.5399 13.7902 19.3809 12 20.4889Z" />
        </svg>
      </StyledLikeButton>
      <LikesCount>{likes}</LikesCount>
    </LikeButtonWrapper>
  );
};

export default LikeButton;
