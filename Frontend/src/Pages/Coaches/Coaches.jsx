import React, { useEffect, useState } from 'react';
import CoachCard from '../../components/CoachCard/CoachCard';
import './Coaches.css'


const Coaches = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/coaches')
      .then((res) => res.json())
      .then((data) => setCoaches(data))
      .catch((err) => console.error('Error fetching coaches:', err));
  }, []);

  return (
    
    <div className="coaches-container">
      {coaches.map((coach) => (
        <CoachCard
          key={coach._id}
          name={coach.name}
          age={coach.age}
          rating={coach.rating}
        />
      ))}
    </div> 
    
     
  );
};

export default Coaches;
