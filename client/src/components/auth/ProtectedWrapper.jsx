import React from 'react';
import  useAuth  from '../../hooks/useAuth';
const ProtectedWrapper = ({ children, onTrigger }) => {
    const { isAuthenticated } = useAuth();
  
    const handleInteraction = (e) => {
      if (!isAuthenticated) {
        e.preventDefault(); // Previene la interacción
        onTrigger(); // Llama a la función para abrir el modal
      }
    };
  
    return (
      <div onClick={handleInteraction} onKeyDown={handleInteraction} role="presentation">
        {children}
      </div>
    );
  };
  
  export default ProtectedWrapper;