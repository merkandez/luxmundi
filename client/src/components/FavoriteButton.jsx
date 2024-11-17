import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { toggleLike, fetchPostById } from "../services/postService";
import styled from "styled-components"; 

const FavoriteButton = ({ initialFavorites, postId, onFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false); // Estado local para saber si está marcado como favorito
  const [favorites, setFavorites] = useState(initialFavorites); // Total de favoritos
  const [loading, setLoading] = useState(false); // Estado de carga para evitar múltiples clics

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const post = await fetchPostById(postId); // Llama al backend para obtener detalles del post
        // Si el backend no devuelve `isFavorite`, puedes manejarlo localmente o inicializar con `false`
        setIsFavorite(post.isFavorite || false);
      } catch (error) {
        console.error("Error al verificar si el post está marcado como favorito:", error);
      }
    };

    checkIfFavorite();
  }, [postId]);

  const toggleFavorite = async () => {
    if (loading) return; // Evita múltiples clics durante la carga

    const increment = !isFavorite; // Determina si estamos sumando o restando
    setIsFavorite(increment); // Cambia el estado local de favorito
    setLoading(true); // Inicia el estado de carga

    try {
      const updatedData = await toggleLike(postId, increment); // Llama al backend para actualizar
      setFavorites(updatedData.likes); // Actualiza el número de favoritos

      if (onFavorite) {
        onFavorite(postId, updatedData.likes); // Notifica al componente padre si corresponde
      }
    } catch (error) {
      console.error("Error al actualizar los favoritos:", error);
      setIsFavorite(!increment); // Revertir el estado local si falla
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <div className="flex items-center">
      <Button
        onClick={toggleFavorite}
        className="text-2xl"
        disabled={loading} // Desactiva el botón mientras está cargando
      >
        <Star
          size={24}
          fill={isFavorite ? "#29C9A9" : "none"} // Verde de relleno cuando está clicada
          stroke="#29C9A9" // Contorno siempre verde
          strokeWidth={2} // Grosor del contorno
        />
      </Button>
      
    </div>
  );
};

export default FavoriteButton;
const Button = styled.button`
  background-color: transparent; // Fondo transparente
  border: none; // Sin bordes
  padding: 0; // Sin padding
  cursor: pointer; // Cambia el cursor al estilo "puntero"
  outline: none; // Sin contorno al enfocar
`;