/**
 * AuthContext.jsx — Global authentication state management using Firebase.
 * Provides user identity, login/logout actions, and registration workflows.
 */

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

/**
 * useAuth — Custom hook for consuming authentication state and methods.
 */
export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider — Context provider that monitors Firebase auth changes.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Monitor Auth State — Registers an observer to update the global user object.
   */
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

  /**
   * loginWithGoogle — Triggers Google OAuth sign-in flow.
   */
  const loginWithGoogle = async () => {
    const { error } = await signInWithGoogle();
    return { error };
  };

  /**
   * loginWithEmail — Authenticates user via email and password credentials.
   */
  const loginWithEmail = async (email, password) => {
    const { error } = await signInWithEmail(email, password);
    return { error };
  };

  /**
   * registerWithEmail — Creates a new user account with profile metadata.
   */
  const registerWithEmail = async (email, password, firstName, lastName) => {
    const { error } = await signUpWithEmail(email, password, firstName, lastName);
    return { error };
  };

  /**
   * resetPassword — Dispatches a recovery email to the user.
   */
  const resetPassword = async (email) => {
    const { error } = await sendPasswordReset(email);
    return { error };
  };

  /**
   * logout — Destroys the current user session on host and provider.
   */
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
