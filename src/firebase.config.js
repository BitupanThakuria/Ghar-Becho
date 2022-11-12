// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwm_Vk2_p33SjfFbQkHMUDOyu8jhh-hcs",
  authDomain: "ghar-becho-app.firebaseapp.com",
  projectId: "ghar-becho-app",
  storageBucket: "ghar-becho-app.appspot.com",
  messagingSenderId: "468185831867",
  appId: "1:468185831867:web:dad044f447a52c333b4c9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
