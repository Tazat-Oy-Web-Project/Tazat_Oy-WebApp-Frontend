// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Web SDK configuration (different from Admin SDK used in backend)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummy-Replace-With-Real-Key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tazat-cleaning.firebaseapp.com",
  projectId: "tazat-cleaning",
  storageBucket: "tazat-cleaning.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes('Dummy')) {
  console.warn('Firebase not configured! Please add Firebase Web SDK credentials to .env file.');
  console.warn('See FIREBASE_SETUP.md for instructions.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
