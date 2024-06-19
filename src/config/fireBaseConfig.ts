import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7AyA7F2Xh9k4TPFxVvASEmO5i5cL01vo",
  authDomain: "blogs-6a0a4.firebaseapp.com",
  projectId: "blogs-6a0a4",
  storageBucket: "blogs-6a0a4.appspot.com",
  messagingSenderId: "685418743168",
  appId: "1:685418743168:web:683502e9b6fa0b5e066d65",
  measurementId: "G-MLBDNL4M5F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
