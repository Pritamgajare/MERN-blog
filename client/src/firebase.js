// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-447e3.firebaseapp.com",
  projectId: "mern-blog-447e3",
  storageBucket: "mern-blog-447e3.appspot.com",
  messagingSenderId: "221779793088",
  appId: "1:221779793088:web:7fce5db2a10d7ebb07c925"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);