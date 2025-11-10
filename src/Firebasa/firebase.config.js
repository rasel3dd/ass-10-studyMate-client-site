// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqFTjN08zREcLsdkGcqM1utfUzFog6u8",
  authDomain: "studymate-user.firebaseapp.com",
  projectId: "studymate-user",
  storageBucket: "studymate-user.firebasestorage.app",
  messagingSenderId: "961358745949",
  appId: "1:961358745949:web:b57210907b5a9a793198b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);