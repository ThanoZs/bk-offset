import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  fetchSignInMethodsForEmail
} from "firebase/auth";

// 🔒 USING ENVIRONMENT VARIABLES - Keys are now secure!
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

console.log("✅ Firebase initialized with environment variables");

// ============================================
// GOOGLE SIGN IN
// ============================================
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("✅ Google sign in successful:", result.user.email);
    return { user: result.user, error: null };
  } catch (error) {
    console.error("❌ Error:", error.code, error.message);
    
    let message = "Sign-in failed";
    if (error.code === 'auth/popup-closed-by-user') message = "Popup closed";
    else if (error.code === 'auth/popup-blocked') message = "Popup blocked";
    
    return { user: null, error: message };
  }
};

// ============================================
// EMAIL SIGN UP
// ============================================
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

// ============================================
// EMAIL SIGN IN
// ============================================
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

// ============================================
// PASSWORD RESET
// ============================================
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================
// SIGN OUT
// ============================================
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================
// AUTH STATE OBSERVER
// ============================================
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// ============================================
// TEST CONNECTION
// ============================================
export const testFirebaseConnection = () => {
  try {
    if (auth) {
      console.log("✅ Firebase auth is configured");
      return true;
    }
    return false;
  } catch (error) {
    console.error("❌ Firebase connection test failed:", error);
    return false;
  }
};

export { auth };