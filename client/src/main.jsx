import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext'
import { router } from './router/AppRouter';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AuthProvider>
    <SearchProvider> 
      <GlobalStyles />
      <RouterProvider router={router} />
      </SearchProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
