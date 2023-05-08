import { initializeApp } from "firebase/app";
// Trial
import { getStorage } from "firebase/storage";
// 
import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_IdaPXfp09Ir3n6jH5zGvUto8Zx7cSUs",
  authDomain: "final-jewelry.firebaseapp.com",
  projectId: "final-jewelry",
  storageBucket: "final-jewelry.appspot.com",
  messagingSenderId: "514977086137",
  appId: "1:514977086137:web:59ddb6fd2ea08992a3b968",
  measurementId: "G-SQQXZZR8J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
// trial
const storage = getStorage();
// trial
export {auth,provider, storage, app};
