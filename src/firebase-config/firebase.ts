// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_9SAW_dZFLZvxHaD5iNsBRykH6Vl_jc",
  authDomain: "crud-f3885.firebaseapp.com",
  projectId: "crud-f3885",
  storageBucket: "crud-f3885.appspot.com",
  messagingSenderId: "329588609896",
  appId: "1:329588609896:web:4955d183432a0302ff3cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);