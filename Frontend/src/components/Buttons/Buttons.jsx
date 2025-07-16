import React from 'react';
import './Buttons.css';
import { useNavigate } from 'react-router-dom';


const Buttons = ({ image, button_name, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="card">
      <img className="card-img" src={image} alt={button_name} />
      <button className="card-btn" onClick={handleClick}>
        {button_name}
      </button>
    </div>
  );
};

export default Buttons;
