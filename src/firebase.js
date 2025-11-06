// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "minimalist-1.firebaseapp.com",
  projectId: "minimalist-1",
  storageBucket: "minimalist-1.firebasestorage.app",
  messagingSenderId: "387448108801",
  appId: "1:387448108801:web:411722f279224560b70d00",
  measurementId: "G-8PXERBYNQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
