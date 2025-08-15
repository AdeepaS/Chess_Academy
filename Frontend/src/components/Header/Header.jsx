import React from 'react';
import Cover_Photo from '../../assets/Photos/home_cover.jpg';
import './Header.css';
import Buttons from '../Buttons/Buttons';

const Header = () => {
  return (
    <div className="content" style={{ backgroundImage: `url(${Cover_Photo})` }}>
      <div className="description">
        <h1>Nobel Worriors Chess Academy</h1>
        <p>Explore our experienced coaches and the suitable courses for you!</p>
        <div className="buttons-container">
          <Buttons button_name="Explore Our Courses" link='/courses' />
          <Buttons button_name="Meet Our Coaches" link='/coaches' />
        </div>
      </div>
    </div>
  );
};

export default Header;
