import React, { useState, useEffect } from 'react';
import A1 from '../../assets/Photos/achievement_1.jpg';
import A2 from '../../assets/Photos/achievement_2.jpg';
import './Achievement.css';



const images = [A1, A2];

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    
    <div className="achievement-slider">
      {/* Slide Track */}
      <h1 className='achievement-slider-h1'>Our Proud Moments</h1>
      <div
        className="slide-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Achievement ${index + 1}`} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="arrow left-arrow" onClick={goToPrev}>&#10094;</button>
      <button className="arrow right-arrow" onClick={goToNext}>&#10095;</button>

      {/* Dots Navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
