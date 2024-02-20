// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB,
  authDomain: "job-portal-d9a14.firebaseapp.com",
  projectId: "job-portal-d9a14",
  storageBucket: "job-portal-d9a14.appspot.com",
  messagingSenderId: "1760690122",
  appId: "1:1760690122:web:bcd294ca66c2ef911e1933"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);