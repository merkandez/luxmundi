import React, { useState, useEffect } from "react";
import { fetchUsers, updateUser, deleteUser } from "../services/adminService";
import {
  fetchPosts,
  updatePost,
  createPost,
  deletePost,
} from "../services/postService";
import { registerUser } from "../services/authService";
import UserManagement from "../components/admin/UserManagement";
import PostManagement from "../components/admin/PostManagement";
import styled from "styled-components";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import { theme } from "../styles/theme";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const loadUsers = async () => {
    console.log("Cargando usuarios");
    const data = await fetchUsers();
    setUsers(data);
    console.log("Usuarios cargados:", data);
  };
  useEffect(() => {
    console.log("AdminPage montado");

    const loadPosts = async () => {
      console.log("Cargando posts");
      const data = await fetchPosts();
      setPosts(data);
      console.log("Posts cargados:", data);
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
      console.error("Error al registrar usuario:", error);
      throw error;
    }
  };

  const [activeComponent, setActiveComponent] = useState("UserManagement");

  return (
    <AdminWrapper>
      <NavbarAdmin setActiveComponent={setActiveComponent} />
      <ContentWrapper>
        {activeComponent === "home" && (
          <WelcomeSection>
            <h1>Panel de Administración</h1>
            <p>Bienvenido al área de gestión de LuxMundi</p>
          </WelcomeSection>
        )}
        {activeComponent === "PostManagement" && (
          <Section>
            <SectionHeader>
              <h2>Gestión de Publicaciones</h2>
            </SectionHeader>
            <PostManagementWrapper>
              <PostManagement
                posts={posts}
                selectedPost={selectedPost}
                onSelectPost={setSelectedPost}
                onUpdatePost={handlePostUpdate}
                onDeletePost={handlePostDelete}
                onCreatePost={handlePostCreate}
              />
            </PostManagementWrapper>
          </Section>
        )}
        {activeComponent === "UserManagement" && (
          <Section>
            <SectionHeader>
              <h2>Gestión de Usuarios</h2>
            </SectionHeader>
            <UserManagement
              users={users}
              reloadUsers={loadUsers}
              selectedUser={selectedUser}
              onSelectUser={setSelectedUser}
              onUpdateUser={handleUserUpdate}
              onDeleteUser={handleUserDelete}
              onCreateUser={handleUserCreate}
            />
          </Section>
        )}
      </ContentWrapper>
    </AdminWrapper>
  );
};

const AdminWrapper = styled.div`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  display: flex;
  width: 100%;
  padding-top: 5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  
  background-color: ${theme.colors.backgroundAlt};
  border-radius: 12px;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;

  @media (min-width: ${theme.breakpoints.tablet}) {
    
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0.5rem;
    padding: 1rem;
  }
`;

const WelcomeSection = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${theme.colors.text.primary};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${theme.colors.primary};
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.8;
  }
`;

const Section = styled.section`
  background-color: ${theme.colors.background};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.colors.border};

  @media (min-width: ${theme.breakpoints.tablet}) {
    
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${theme.colors.primaryLight};

  h2 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }
`;

const PostManagementWrapper = styled.div`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

export default AdminPage;
