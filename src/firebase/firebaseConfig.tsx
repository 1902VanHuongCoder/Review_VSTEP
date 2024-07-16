// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRwEt-KrcQYSpF1sURW248dmxlLI3sVa8",
  authDomain: "reviewvstep.firebaseapp.com",
  projectId: "reviewvstep",
  storageBucket: "reviewvstep.appspot.com",
  messagingSenderId: "292694784206",
  appId: "1:292694784206:web:7b8e6bf1b9af756ba0f89f",
  measurementId: "G-6K92LLL378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);