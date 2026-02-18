import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('bk_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would validate against a backend
    // For demo purposes, we'll create a mock user
    const mockUser = {
      email: email,
      firstName: "John",
      lastName: "Doe",
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    };
    
    localStorage.setItem('bk_user', JSON.stringify(mockUser));
    setUser(mockUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('bk_user');
    setUser(null);
  };

  const register = (userData) => {
    // In a real app, this would register with a backend
    const newUser = {
      ...userData,
      isAuthenticated: true,
      registeredAt: new Date().toISOString(),
    };
    
    localStorage.setItem('bk_user', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
