import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIrPo7rZdx8irO5zFAZaYTY-ozwyhAZmM",
  authDomain: "serve-us-702e7.firebaseapp.com",
  projectId: "serve-us-702e7",
  storageBucket: "serve-us-702e7.appspot.com",
  messagingSenderId: "372605847779",
  appId: "1:372605847779:web:482f02a76c2c2b0c125dd6"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
export default app;