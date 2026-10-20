// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNxkNA7H2xDLo6aPvCsyQz1NccVc96r3I",
  authDomain: "wikspace-c7fff.firebaseapp.com",
  projectId: "wikspace-c7fff",
  storageBucket: "wikspace-c7fff.firebasestorage.app",
  messagingSenderId: "1068326368828",
  appId: "1:1068326368828:web:1c92f32c98deb0e4d9b539",
  measurementId: "G-093CL6BSTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);