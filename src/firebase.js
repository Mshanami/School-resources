// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbhOZoQsb17gWIN9M7L3agXymsdkbuJk",
  authDomain: "high-school-resources.firebaseapp.com",
  projectId: "high-school-resources",
  storageBucket: "high-school-resources.appspot.com",
  messagingSenderId: "506656882140",
  appId: "1:506656882140:web:e55f68da94672a50992319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
