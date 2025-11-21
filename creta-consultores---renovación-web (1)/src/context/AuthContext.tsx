
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('creta_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUser(localStorage.getItem('creta_user'));
    }
  }, []);

  const login = (email: string) => {
    setIsAuthenticated(true);
    setUser(email);
    localStorage.setItem('creta_auth', 'true');
    localStorage.setItem('creta_user', email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('creta_auth');
    localStorage.removeItem('creta_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
