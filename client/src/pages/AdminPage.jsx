import React, { useState, useEffect } from 'react';
import { fetchUsers, updateUser, deleteUser } from '../services/adminService';
import {
  fetchPosts,
  updatePost,
  createPost,
  deletePost,
} from '../services/postService';
import  { registerUser } from '../services/authService';
import UserManagement from '../components/admin/UserManagement';
import PostManagement from '../components/admin/PostManagement';
import styled from 'styled-components';
import NavbarAdmin from '../components/admin/navbarAdmin';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    console.log('AdminPage montado');
    const loadUsers = async () => {
      console.log('Cargando usuarios');
      const data = await fetchUsers();
      setUsers(data);
      console.log('Usuarios cargados:', data);
    };

    const loadPosts = async () => {
      console.log('Cargando posts');
      const data = await fetchPosts();
      setPosts(data);
      console.log('Posts cargados:', data);
    };

    loadUsers();
    loadPosts();
  }, []);

  const handleUserUpdate = async (userId, updatedData) => {
    const updatedUser = await updateUser(userId, updatedData);
    setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
  };

  const handleUserDelete = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handlePostUpdate = async (postId, updatedData) => {
    const updatedPost = await updatePost(postId, updatedData);
    setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)));
  };

  const handlePostDelete = async (postId) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handlePostCreate = async (newPostData) => {
    const newPost = await createPost(newPostData);
    setPosts([...posts, newPost]);
  };

  const handleUserCreate = async (newUserData) => {
    try {
      const newUser = await registerUser(newUserData);
      if (newUser) {
        setUsers([...users, newUser]);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  };

  const [activeComponent, setActiveComponent] = useState('UserManagement');

  return (
    <Container>
      <NavbarAdmin setActiveComponent={setActiveComponent} />
      {/* Renderizado condicional basado en el estado */}
      {activeComponent === 'home' && <div>Contenido de inicio</div>}
      {activeComponent === 'PostManagement' && <Section>
        <PostManagement
          posts={posts}
          selectedPost={selectedPost}
          onSelectPost={setSelectedPost}
          onUpdatePost={handlePostUpdate}
          onDeletePost={handlePostDelete}
          onCreatePost={handlePostCreate}
        />
        <h2>Gestión de Publicaciones</h2>
      </Section>}
      {activeComponent === 'UserManagement' && <Section>
        <h2>Gestión de Usuarios</h2>
        <UserManagement
          users={users}
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
          onUpdateUser={handleUserUpdate}
          onDeleteUser={handleUserDelete}
          onCreateUser={handleUserCreate}
        />
      </Section>}
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
`;

const Section = styled.section`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;
