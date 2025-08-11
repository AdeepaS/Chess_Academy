import React from 'react';
import './Buttons.css';
import { useNavigate } from 'react-router-dom';


const Buttons = ({  button_name, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
  
      <button className="button-card-btn" onClick={handleClick}>
        {button_name}
      </button>
    
  );
};

export default Buttons;
