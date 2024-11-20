import { describe, it, expect, beforeEach, vi } from 'vitest';
import axios from 'axios';
import { fetchPosts, fetchPostById, createPost, updatePost, deletePost, uploadImage } from '../services/postService';

vi.mock('axios');

// Implementamos un mock de localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

// Asignamos el mock al objeto global
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('Post Service', () => {
  const mockToken = 'test-token';
  const mockPost = { id: 1, title: 'Test Post', content: 'Test Content' };
  const mockPosts = [mockPost];

  beforeEach(() => {
    localStorage.setItem('token', mockToken);
    vi.clearAllMocks();
  });

  it('fetchPosts debe retornar lista de posts', async () => {
    axios.get.mockResolvedValue({ data: mockPosts });
    const result = await fetchPosts();
    expect(result).toEqual(mockPosts);
  });

  it('fetchPostById debe retornar un post específico', async () => {
    axios.get.mockResolvedValue({ data: mockPost });
    const result = await fetchPostById(1);
    expect(result).toEqual(mockPost);
  });

  it('createPost debe crear un nuevo post', async () => {
    axios.post.mockResolvedValue({ data: mockPost });
    const result = await createPost(mockPost);
    expect(result).toEqual(mockPost);
  });

  it('updatePost debe actualizar un post existente', async () => {
    axios.put.mockResolvedValue({ data: mockPost });
    const result = await updatePost(1, mockPost);
    expect(result).toEqual(mockPost);
  });

  it('deletePost debe eliminar un post', async () => {
    axios.delete.mockResolvedValue({ data: { message: 'Post eliminado' } });
    const result = await deletePost(1);
    expect(result).toEqual({ message: 'Post eliminado' });
  });

  it('uploadImage debe subir una imagen', async () => {
    const mockImageResponse = { url: 'test-image-url' };
    axios.post.mockResolvedValue({ data: mockImageResponse });
    
    const mockFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const result = await uploadImage(mockFile);
    expect(result).toEqual(mockImageResponse);
  });
});
