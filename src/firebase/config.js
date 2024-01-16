// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMBKO8nnxUfpNMSV-Nd1xDa3z9Iq5ex3M",
  authDomain: "reacj49910.firebaseapp.com",
  projectId: "reacj49910",
  storageBucket: "reacj49910.appspot.com",
  messagingSenderId: "255824087974",
  appId: "1:255824087974:web:029cf479bcdd1023591d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()