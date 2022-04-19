// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCebBXo4IRumLcuJAfYfNMzl1JebkK9FwI",
  authDomain: "alfa-web-e9720.firebaseapp.com",
  projectId: "alfa-web-e9720",
  storageBucket: "alfa-web-e9720.appspot.com",
  messagingSenderId: "538475051781",
  appId: "1:538475051781:web:cd7dcc936ac82d7004d56c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
