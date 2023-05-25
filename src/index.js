import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import First from './first';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
