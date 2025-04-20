// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth"; //we need to import this to use auth service
import "firebase/compat/firestore";
import "firebase/compat/auth";
// const dotenv=require("dotenv")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAwujG09blrhwVumCAcd3oNKwtEbnYcOkE",
  authDomain: "clone-frontend-19af6.firebaseapp.com",
  projectId: "clone-frontend-19af6",
  storageBucket: "clone-frontend-19af6.firebasestorage.app",
  messagingSenderId: "136826585619",
  appId: "1:136826585619:web:553e951fbed7acd7d1f5e6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//here we need to export to other componet

export const auth = getAuth(app); //
export const db = app.firestore();