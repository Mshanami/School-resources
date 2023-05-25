import{ BrowserRouter as router, Link } from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import First from './first';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function App() {
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const SubmitForm = (e) =>{
    const navigate=useNavigate;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/first')
        // Signed in 
        const user = userCredential.user;
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode ==='auth/wrong-password') {
          alert('incorrect password');
          
        }
      });
    
  }
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={SubmitForm}>
        <p className="title">Sign In</p>
     <label htmlFor="usurname">Username:<br/>
     <input type="email" name="Username" id="surname" placeholder="Example@gmail.com" required onChange={handleEmailChange}/></label>
     <br/>
     <label htmlFor="password">Password:<br/>
      <input type="password" id="password" name="password" required onChange={handlePasswordChange} />
     </label><br/>
     <button type="submit">Sign In</button>
    

    </form>
    <p className="sign-in-up">Don't have an account? <Link to="/first">Sign-up here</Link>
     </p>

      </div>
    </div>
  );
}

export default App;
