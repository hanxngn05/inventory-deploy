// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhnfZLkHmpCAE7MuJUdu1ze_icj2dnch0",
  authDomain: "inventory-management-d4c26.firebaseapp.com",
  projectId: "inventory-management-d4c26",
  storageBucket: "inventory-management-d4c26.appspot.com",
  messagingSenderId: "977698760249",
  appId: "1:977698760249:web:e3343d684cc996cb838fe8",
  measurementId: "G-9409TG86N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};