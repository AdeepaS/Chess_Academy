import React from 'react';
import './Buttons.css';
import { useNavigate } from 'react-router-dom';


const Buttons = ({ image, button_name, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="course-card">
      <img className="course-img" src={image} alt={button_name} />
      <button className="course-btn" onClick={handleClick}>
        {button_name}
      </button>
    </div>
  );
};

export default Buttons;
