/*import React from 'react'
import Logo from '../../../src/assets/Photos/chess_logo.jpg'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={Logo} alt="Logo_Img" />
        </div>
        <div className="navbar-items">
            <h1>Home</h1>
            <h1>Courses</h1>
            <h1>Coaches</h1>
            <h1>Achievements</h1>
            <h1>About Us</h1>
        </div>
    </div>
  )
}

export default NavBar
*/

// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/Photos/chess_logo.jpg';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo_Img" />
      </div>
      <div className="navbar-items">
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/courses"><h1>Courses</h1></Link>
        <Link to="/coaches"><h1>Coaches</h1></Link>
        <h1>Achievements</h1> {/* You can link this later */}
        <h1>About Us</h1>     {/* You can link this later */}
      </div>
    </div>
  );
};

export default NavBar;
