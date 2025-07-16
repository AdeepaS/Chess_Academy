import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ title, instructor, schedule, level, mode, description }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <h4>Instructor : {instructor}</h4>
      <h4>{schedule}</h4>
      <h4>Level : {level}</h4>
      <h4>Mode : {mode}</h4>
      <h4>{description}</h4>
    </div>
  );
};

export default CourseCard;

