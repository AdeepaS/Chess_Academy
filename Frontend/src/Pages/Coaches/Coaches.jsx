import React, { useEffect, useState } from 'react';
import CoachCard from '../../components/CoachCard/CoachCard';
import './Coaches.css'
import pradeepImg from '../../assets/Photos/Pradeep.jpg'
import pabasaraImg from '../../assets/Photos/Pabasara.jpg'
import adeepaImg from '../../assets/Photos/Adeepa.jpg'


const imageMap = {
  'Pradeep Jayanka': pradeepImg,
  'Pabasara': pabasaraImg,
  'Adeepa Shashiprabhath' : adeepaImg
};


const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
//http://localhost:5000/api/coaches//
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
          photo={imageMap[coach.name]}
        />
      ))}
    </div> 
    
     
  );
};

export default Coaches;
