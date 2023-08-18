// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjqfeo1BArOWxKyuIk5rJYbTKag8ulL6Y",
  authDomain: "rchallenge5.firebaseapp.com",
  projectId: "rchallenge5",
  storageBucket: "rchallenge5.appspot.com",
  messagingSenderId: "912981199287",
  appId: "1:912981199287:web:4ab16aa43090d50a954032"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);