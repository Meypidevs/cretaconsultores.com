
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS as INITIAL_POSTS } from '../constants';

interface DataContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  getPost: (id: string) => BlogPost | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load from local storage or fall back to constants
    const storedPosts = localStorage.getItem('creta_posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(INITIAL_POSTS);
      localStorage.setItem('creta_posts', JSON.stringify(INITIAL_POSTS));
    }
    setIsInitialized(true);
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('creta_posts', JSON.stringify(newPosts));
  };

  const addPost = (post: BlogPost) => {
    const newPosts = [post, ...posts];
    savePosts(newPosts);
  };

  const updatePost = (updatedPost: BlogPost) => {
    const newPosts = posts.map(p => p.id === updatedPost.id ? updatedPost : p);
    savePosts(newPosts);
  };

  const deletePost = (id: string) => {
    const newPosts = posts.filter(p => p.id !== id);
    savePosts(newPosts);
  };

  const getPost = (id: string) => {
    // If specific post requested, try to find in current state, fallback to initial if not loaded yet
    return posts.find(p => p.id === id) || INITIAL_POSTS.find(p => p.id === id);
  };

  if (!isInitialized) return null; // Or a loading spinner

  return (
    <DataContext.Provider value={{ posts, addPost, updatePost, deletePost, getPost }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
