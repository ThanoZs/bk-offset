// Import the functions you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  fetchSignInMethodsForEmail
} from "firebase/auth";

// !!! REPLACE WITH YOUR ACTUAL FIREBASE CONFIG !!!
const firebaseConfig = {
  apiKey: "AIzaSyAVsOqwBt41VMBzk1re-OMzD06kLXoniOo",
  authDomain: "printing-press-system.firebaseapp.com",
  projectId: "printing-press-system",
  storageBucket: "printing-press-system.firebasestorage.app",
  messagingSenderId: "920502808043",
  appId: "1:920502808043:web:cea7eb1783aac4a39a7dae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

console.log("✅ Firebase initialized");

// GOOGLE SIGN IN - FIXED VERSION
export const signInWithGoogle = async () => {
  try {
    console.log("🔄 Opening Google popup...");
    
    // Set a timeout to handle popup blocking
    const popupPromise = signInWithPopup(auth, googleProvider);
    
    const result = await popupPromise;
    console.log("✅ Success:", result.user.email);
    return { user: result.user, error: null };
    
  } catch (error) {
    console.error("❌ Error:", error.code, error.message);
    
    // Handle specific errors
    if (error.code === 'auth/popup-closed-by-user') {
      return { user: null, error: "Please complete sign-in in the popup window" };
    } else if (error.code === 'auth/popup-blocked') {
      return { user: null, error: "Popup blocked. Please allow popups for this site." };
    } else if (error.code === 'auth/cancelled-popup-request') {
      return { user: null, error: "Sign-in cancelled" };
    }
    
    return { user: null, error: "Sign-in failed. Please try again." };
  }
};

// Email sign up
export const signUpWithEmail = async (email, password, firstName, lastName) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    if (methods.length > 0) {
      return { user: null, error: 'Email already registered' };
    }
    
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: `${firstName} ${lastName}` });
    await sendEmailVerification(credential.user);
    await signOut(auth);
    
    return { user: null, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Email sign in
export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    
    if (!result.user.emailVerified) {
      await signOut(auth);
      return { user: null, error: 'Please verify your email first' };
    }
    
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: 'Invalid email or password' };
  }
};

// Password reset
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Sign out
export const signOutUser = async () => {
  await signOut(auth);
  return { error: null };
};

// Auth state observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth };
