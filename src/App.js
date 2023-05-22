import{ Link } from 'react-router-dom'
import './App.css';
import First from './first'


function App() {
  const submitForm = (e) =>{

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
  }
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={submitForm}>
        <p className="title">Sign In</p>
     <label htmlFor="usurname">Username:<br/>
     <input type="email" name="Username" id="surname" placeholder="Example@gmail.com" required/></label>
     <br/>
     <label htmlFor="password">Password:<br/>
      <input type="password" id="password" name="password" required />
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
