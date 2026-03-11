// Debug Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("🔍 FIREBASE DEBUG INFO:");
console.log("1. Environment variables loaded:");
console.log("   VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY ? "✅ Present" : "❌ Missing");
console.log("   VITE_FIREBASE_AUTH_DOMAIN:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? "✅ Present" : "❌ Missing");
console.log("   VITE_FIREBASE_PROJECT_ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✅ Present" : "❌ Missing");

// Try to initialize Firebase
try {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  console.log("2. Firebase Config (partial):", {
    apiKey: firebaseConfig.apiKey?.substring(0, 10) + "...",
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
  });

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log("3. ✅ Firebase initialized successfully");
  
} catch (error) {
  console.error("3. ❌ Firebase initialization failed:", error);
}

// Export for use in App.jsx
export const debug = true;
