import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ title, instructor, schedule, level, mode, description }) => {
  return (
    <div className="course-card">
      <h1>{title}</h1>
      <h3>Instructor : {instructor}</h3>
      <h3>{schedule}</h3>
      <h3>Level : {level}</h3>
      <h3>Mode : {mode}</h3>
      <h3>{description}</h3>
      <button>Enroll now</button>
    </div>  
    
  );
};

export default CourseCard;

