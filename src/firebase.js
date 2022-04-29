// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgI3NjlE48oIkTzcfvFjqFZz_XALyo9mY",
  authDomain: "hirect-app.firebaseapp.com",
  projectId: "hirect-app",
  storageBucket: "hirect-app.appspot.com",
  messagingSenderId: "285653261923",
  appId: "1:285653261923:web:7c08c88d57cdfc06576256",
  measurementId: "G-B4ZPHCFSR1",
  databaseURL: "https://hirect-app-default-rtdb.firebaseio.com",
};
export const app = firebase.initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
