import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';


import { worker } from './mocks/browser';

// Función para iniciar la aplicación
const startApp = () => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Inicializa MSW en desarrollo y arranca la app process.env.NODE_ENV === 'development'
if (import.meta.env.DEV) {
  worker.start({
    onUnhandledRequest: 'bypass', // Ignora las peticiones no manejadas
  }).then(startApp)
  .catch(error => {
    console.warn('Error al iniciar MSW:', error);
    startApp();
  });
} else {
  startApp();
}