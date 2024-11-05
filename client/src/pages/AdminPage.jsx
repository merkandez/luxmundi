import React, { useState, useEffect } from 'react';
import { fetchUsers, updateUser, deleteUser } from '../services/adminService';
import {
  fetchPosts,
  updatePost,
  createPost,
  deletePost,
} from '../services/postService';
import UserManagement from '../components/admin/UserManagement';
import PostManagement from '../components/admin/PostManagement';
import styled from 'styled-components';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Cargar usuarios y publicaciones al montar el componente
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
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

  return (
    <Container>
      <Section>
        <h2>Gestión de Usuarios</h2>
        <UserManagement
            users={users}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
            onUpdateUser={handleUserUpdate}
            onDeleteUser={handleUserDelete}
        />
      </Section>
      <Section>
        <h2>Gestión de Publicaciones</h2>
        <PostManagement
           posts={posts}
           selectedPost={selectedPost}
           onSelectPost={setSelectedPost}
           onUpdatePost={handlePostUpdate}
           onDeletePost={handlePostDelete}
           onCreatePost={handlePostCreate}
        />
      </Section>
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.section`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
