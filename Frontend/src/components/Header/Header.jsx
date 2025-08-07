import React from 'react'
import Cover_Photo from '../../assets/Photos/new.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="content">
      <img className="cover-img" src={Cover_Photo} alt="cover_img" />
      <p className="description">
        Nobel Warriors Chess Academy is a premier chess training center dedicated to nurturing strategic thinking, discipline, and competitive spirit among players of all ages and skill levels. Our academy combines expert coaching, modern training techniques, and a supportive community to help each student unlock their full potential on the chessboard. Whether you’re a beginner eager to learn the fundamentals or an advanced player aiming to compete at higher levels, Nobel Warriors provides personalized guidance and a dynamic learning environment to elevate your game. Join us to develop your skills, sharpen your tactics, and become a true warrior in the world of chess!
      </p>
    </div>
  )
}

export default Header
