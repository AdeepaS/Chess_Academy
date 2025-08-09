/*import React from 'react'
import './CoachCard.css'

const CoachCard = ({ name, age, rating, photo}) => {
  return (
    <div className="card">
        <div className="image">
            <img src={photo} alt="coach_img" />
        </div>
        <div className="coach-details">
            <h1>{name}</h1>
            <h1>Age : {age}</h1>
            <h1>Rating : {rating}</h1>
            <div>
              <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default CoachCard*/

import React from 'react';
import './CoachCard.css';

const CoachCard = ({ name, age, rating, photo, description }) => {
  return (
    <div className="card">
      <div className="image-section">
        <img src={photo} alt="coach_img" />
        <div className="age-rating">
          <h3>Age: {age}</h3>
          <h3>Rating: {rating}</h3>
        </div>
        </div>

      <div className="description-section">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>

  );
};

export default CoachCard;

