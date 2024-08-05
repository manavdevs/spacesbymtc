// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7TM_8KN4mj9aSXidi8nK2ZBAWzaris1A",
  authDomain: "spacesbymtc-bb6fb.firebaseapp.com",
  projectId: "spacesbymtc-bb6fb",
  storageBucket: "spacesbymtc-bb6fb.appspot.com",
  messagingSenderId: "781425624911",
  appId: "1:781425624911:web:46dbbdd2e4889321a8e73a",
  measurementId: "G-BVZM9NFQ2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };