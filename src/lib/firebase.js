import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a32e0.firebaseapp.com",
  projectId: "reactchat-a32e0",
  storageBucket: "reactchat-a32e0.appspot.com",
  messagingSenderId: "711538414690",
  appId: "1:711538414690:web:2c9d319fae64b1bd00ed3b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();