import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ title, level, duration }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>
      <p className="course-info">Level: {level}</p>
      <p className="course-info">Duration: {duration}</p>
      <Link to="/courses">
        <button className="course-btn">View Course</button>
      </Link>
    </div>
  );
};

export default CourseCard;
