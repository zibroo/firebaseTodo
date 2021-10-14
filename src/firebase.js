
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAlcKvVqgsZzDZe6fgD47D16enjR5u3q1s",
    authDomain: "todolist-list.firebaseapp.com",
    projectId: "todolist-list",
    storageBucket: "todolist-list.appspot.com",
    messagingSenderId: "554853680976",
    appId: "1:554853680976:web:aa56377a5be63e39890e55"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)