import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithGoogle, 
  signInWithEmail, 
  signUpWithEmail,
  signOutUser,
  onAuthStateChange,
  sendPasswordReset
} from '../components/auth/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          firstName: firebaseUser.displayName?.split(' ')[0] || 'User',
          lastName: firebaseUser.displayName?.split(' ').slice(1).join(' ') || '',
          emailVerified: firebaseUser.emailVerified,
          isAuthenticated: true,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    const { error } = await signInWithGoogle();
    return { error };
  };

  const loginWithEmail = async (email, password) => {
    const { error } = await signInWithEmail(email, password);
    return { error };
  };

  const registerWithEmail = async (email, password, firstName, lastName) => {
    const { error } = await signUpWithEmail(email, password, firstName, lastName);
    return { error };
  };

  const resetPassword = async (email) => {
    const { error } = await sendPasswordReset(email);
    return { error };
  };

  const logout = async () => {
    await signOutUser();
  };

  return (
    <AuthContext.Provider value={{
      user,
      loginWithGoogle,
      loginWithEmail,
      registerWithEmail,
      resetPassword,
      logout,
      loading,
      isAuthenticated: !!user,
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
