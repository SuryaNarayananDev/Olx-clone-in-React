import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHzJbJjkcUZhviPfieLtqbwSBmGJoeoqY",
    authDomain: "fir-c9263.firebaseapp.com",
    projectId: "fir-c9263",
    storageBucket: "fir-c9263.appspot.com",
    messagingSenderId: "332825319693",
    appId: "1:332825319693:web:d2a9f4b797a4ddb2253844",
    measurementId: "G-V13XKW2KH1"
  };

let auth

const app =initializeApp(firebaseConfig)
auth = initializeAuth(app)

export default auth