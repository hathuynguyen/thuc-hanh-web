import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1w2xUxOb5wcgwAWcDIuEoNwEkwI8DWv0",
  authDomain: "chat-app-6084a.firebaseapp.com",
  projectId: "chat-app-6084a",
  storageBucket: "chat-app-6084a.appspot.com",
  messagingSenderId: "981956326012",
  appId: "1:981956326012:web:a1c4eb58255e91a2264ff9",
  measurementId: "G-LWMSP5W3TB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
