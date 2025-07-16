import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import './Home.css'
import InstructorImg from '../../assets/Photos/instructor_image.avif'
import CourseImg from '../../assets/Photos/course_image.jpg'
import AchievementImg from '../../assets/Photos/achievement_image.jpeg'
import Buttons from '../../components/Buttons/Buttons'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <div className="quick-buttons">
      <Buttons
        image={CourseImg} button_name="Explore Courses" link= "/courses"
        /> 
        
      <Buttons
        image={InstructorImg} button_name="Our Instructors" link= "/coaches"
        /> 

      <Buttons
        image={AchievementImg} button_name="Our Achievements" link= "/achivements"
        /> 

    </div>
    <Footer/>
    
    </>
  )
}

export default Home
