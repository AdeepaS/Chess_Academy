import React from 'react'
import Pradeep from '../../assets/Photos/chess_logo.jpg'
import './CoachCard.css'

const CoachCard = ({ name, age, rating}) => {
  return (
    <div className="card">
        <div className="image">
            <img src={Pradeep} alt="coach_img" />
        </div>
        <div className="coach-details">
            <h1>{name}</h1>
            <h1>Age : {age}</h1>
            <h1>Rating : {rating}</h1>
        </div>
    </div>
  )
}

export default CoachCard
