import './App.css';
import{ Link, Navigate, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import App from './App';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function First() {
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function resertForm() {}
  const submitForm = (e) =>{
    const auth = getAuth();
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    Navigate("/login")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    resertForm();
  }
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={submitForm}>
        <p className="title">Sign Up</p>
        <label htmlFor="name">Name:
     <input type="text" name="name" id="name"/></label>
     <label htmlFor="usurname">Email:<br/>
     <input type="email" value={email} name="Username" id="surname" placeholder="Example@gmail.com" onChange={handleEmailChange} required/></label>
     <br/>
     <label htmlFor="password">Password:<br/>
      <input type="password" value={password} id="password" name="password" onChange={handlePasswordChange} required />
      </label>
     <br/>
     <button type="submit">Sign Up</button>
     <p className="sign-in-up">Already have an account? <Link to="/">Sign-in here</Link>
     </p>

    </form>

      </div>
    </div>
  );
}

export default First;