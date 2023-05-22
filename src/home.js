import React from 'react';
import{ Link } from 'react-router-dom'
import './home.css';
import First from './first';
import App from './App';
import {BsFillXDiamondFill} from "react-icons/bs";
import highschool from './highschool.jpg'
import schoolkids from './schoolkids.jpg'
import qpaper from './qpaper.jpg'



function Home() {

	return(
	 <div className="Home">
	 <nav className="navbar">
	  <BsFillXDiamondFill style={{color: "#a5e300", fontSize: "40px"}} />
	  <div className="menu">
	   <ul className="list">
	     <li><a href="#">Home</a></li>
	     <li><Link to="/first">Register</Link></li>
	      <li><Link to="login">SignIn</Link></li>
	   </ul>

	  </div>

	 </nav>
	 <div className="home-page">
	  <div className="content">
       <p className="content-header">Welcome to our Student Study Material Page-Your One-Stop Destination for All Your Academic Resources! </p>
       <p className="content-info">Access free high school study materials such as free previous question papers,study guides or notes </p>
       <Link to="/first"><button>Register now</button></Link>
	  </div>
	  <img src={highschool} alt="highschool" />
	 </div>
	 </div>


	);
}
export default Home;