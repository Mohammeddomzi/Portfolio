// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhMqLVOPQ_pck7yml8TPzhQC2m5EJAZ4w",
  authDomain: "personal-b561e.firebaseapp.com",
  projectId: "personal-b561e",
  storageBucket: "personal-b561e.appspot.com",
  messagingSenderId: "1028433632504",
  appId: "1:1028433632504:web:ea576badf7adb88b496f0d",
  measurementId: "G-8FJ6Y13M45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, app  };