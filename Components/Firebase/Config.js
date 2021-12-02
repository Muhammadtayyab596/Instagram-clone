// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD4bvH2jFq9L0poHn6Relpo9VF4Hx70oJs",
    authDomain: "instagram-clone-35711.firebaseapp.com",
    projectId: "instagram-clone-35711",
    storageBucket: "instagram-clone-35711.appspot.com",
    messagingSenderId: "430144117040",
    appId: "1:430144117040:web:e9f1b5b27a3582966d10f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db }

