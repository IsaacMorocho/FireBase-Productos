// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqc_7CfWBBXYC1lLRvkrhgHzMDrElEHV0",
  authDomain: "login-auth-fedcd.firebaseapp.com",
  projectId: "login-auth-fedcd",
  storageBucket: "login-auth-fedcd.firebasestorage.app",
  messagingSenderId: "13091977122",
  appId: "1:13091977122:web:58df5d85d6662089f34c0f"
};
// Inicializar el Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };