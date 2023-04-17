import './App.css';
import{ Link } from 'react-router-dom';
import React, {useState} from 'react';
import App from './App';

function First() {
  const [Password, setPassword]=useState('');
  const [ConfirmPassword, setConfirmPassword]=useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  function resertForm() {}
  const submitForm = (e) =>{
    
    const RegisterformData = new FormData(e.target);
    const Registration = Object.fromEntries(RegisterformData);

    Password === ConfirmPassword?alert("you have successfully registered"):alert("Password don't match please try again");
    console.log(Registration);
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
     <input type="email" name="Username" id="surname" placeholder="Example@gmail.com" required/></label>
     <br/>
     <label htmlFor="password">Password:<br/>
      <input type="password" value={Password} id="password" name="password" onChange={handlePasswordChange} required /></label>
      <label htmlFor="password">Confirm password:<br/>
      <input type="password" value={ConfirmPassword} id="confpassword" name="comfirmPassword" onChange={handleConfirmPasswordChange} required />
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