// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDgI3NjlE48oIkTzcfvFjqFZz_XALyo9mY",
  authDomain: "hirect-app.firebaseapp.com",
  projectId: "hirect-app",
  storageBucket: "hirect-app.appspot.com",
  messagingSenderId: "285653261923",
  appId: "1:285653261923:web:7c08c88d57cdfc06576256",
  measurementId: "G-B4ZPHCFSR1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
