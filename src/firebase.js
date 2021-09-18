import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuyQ3efjG-YyduO2EWvA5sAt0sLE25_C4",
    authDomain: "innovations-website-38059.firebaseapp.com",
    projectId: "innovations-website-38059",
    storageBucket: "innovations-website-38059.appspot.com",
    messagingSenderId: "94429306915",
    appId: "1:94429306915:web:2f0e9e233cd6e63ae9d196"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export {auth}
export default app