import React, { useEffect, useState } from 'react';
import CoachCard from '../../components/CoachCard/CoachCard';
import './Coaches.css';
import pradeepImg from '../../assets/Photos/Pradeep.jpg';
import pabasaraImg from '../../assets/Photos/Pabasara.jpg';
import adeepaImg from '../../assets/Photos/Adeepa.jpg';
import kaveenImg from "../../assets/Photos/kaveen.jpg";

const imageMap = {
  'Pradeep Jayanka': pradeepImg,
  'Pabasara': pabasaraImg,
  'Adeepa Shashiprabhath': adeepaImg,
  'Kaveen': kaveenImg
};

const descriptionMap = {
  'Pradeep Jayanka': 'An experienced coach specializing in advanced chess strategies and opening theory.',
  'Pabasara': 'Expert in tactical play and teaching beginners to intermediate students.',
  'Adeepa Shashiprabhath': 'Focuses on dynamic attacking chess and improving decision-making.',
  'Kaveen': 'Known for strong endgame skills and positional play guidance.'
};

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
          photo={imageMap[coach.name]}
          description={descriptionMap[coach.name]}
        />
      ))}
    </div> 
  );
};

export default Coaches;

