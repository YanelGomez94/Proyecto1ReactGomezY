import MOCK_DATA from './data.js' assert { type: 'json'}
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBMBKO8nnxUfpNMSV-Nd1xDa3z9Iq5ex3M",
    authDomain: "reacj49910.firebaseapp.com",
    projectId: "reacj49910",
    storageBucket: "reacj49910.appspot.com",
    messagingSenderId: "255824087974",
    appId: "1:255824087974:web:029cf479bcdd1023591d67"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})