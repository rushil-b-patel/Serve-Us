import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDv_kyO6881rrsBgAodc3H-P9RJvhzF0kM",
  authDomain: "serve-us-44388.firebaseapp.com",
  projectId: "serve-us-44388",
  storageBucket: "serve-us-44388.appspot.com",
  messagingSenderId: "1088051010991",
  appId: "1:1088051010991:web:3ab9a0bb5c6329a5c7e35a"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
export default app;