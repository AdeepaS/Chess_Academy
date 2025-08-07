
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/Photos/chess_logo.jpg';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={Logo} alt="Logo_Img" />
        </div>
        <div className="nav-links">
          <Link to="/"><h1>Home</h1></Link>
          <Link to="/courses"><h1>Courses</h1></Link>
          <Link to="/coaches"><h1>Coaches</h1></Link>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/login"><h1>Login</h1></Link>
        <Link to="/signup"><h1>Register</h1></Link>
      </div>
    </div>
  );
};

export default NavBar;

