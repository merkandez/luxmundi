//import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { AuthProvider } from './components/AuthProvider';

const router = createBrowserRouter([
  { path: '/', element: <PostList /> },
  { path: '/posts/new', element: <PostForm isEditMode={false} /> },
  { path: '/posts/:id/edit', element: <PostForm isEditMode={true} /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

