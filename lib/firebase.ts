
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNxkNA7H2xDLo6aPvCsyQz1NccVc96r3I",
  authDomain: "wikspace-c7fff.firebaseapp.com",
  projectId: "wikspace-c7fff",
  storageBucket: "wikspace-c7fff.firebasestorage.app",
  messagingSenderId: "1068326368828",
  appId: "1:1068326368828:web:1c92f32c98deb0e4d9b539",
  measurementId: "G-093CL6BSTG",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const authReady = Promise.resolve(auth);
