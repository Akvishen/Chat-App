import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOWtI4qPAlJvCwuxJ9K7kpwX_UEWSV-t8",
  authDomain: "chat-web-8a695.firebaseapp.com",
  projectId: "chat-web-8a695",
  storageBucket: "chat-web-8a695.appspot.com",
  messagingSenderId: "793052207229",
  appId: "1:793052207229:web:194982c009469630da3914",
  measurementId: "G-SBE9YGBYCF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
