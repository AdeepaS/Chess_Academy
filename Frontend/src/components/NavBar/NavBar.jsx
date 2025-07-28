
// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/Photos/chess_logo.jpg';
import './Navbar.css';

//need to modify the navbar to login page and have to create dashboard

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
        <Link to="/signup"><h1>Register</h1></Link>     
      </div>
    </div>
  );
};

export default NavBar;
