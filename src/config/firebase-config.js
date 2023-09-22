// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxscU7GDWoHPB7zTsEKXpVVBz6JVToPu4",
  authDomain: "expense-tracker-5a681.firebaseapp.com",
  projectId: "expense-tracker-5a681",
  storageBucket: "expense-tracker-5a681.appspot.com",
  messagingSenderId: "264399493836",
  appId: "1:264399493836:web:b0cc25c631eee4b6414069",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firebase login
//firebase init
//firebase deploy
