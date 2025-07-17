import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import "./Courses.css"

const Courses = () => {
  return (
    <>
    <div className='course-container'>
    <CourseCard
        title="Chess For Beginners"
        instructor="Coach Kaveen"
        schedule="Every Mondays and Thursdays from 3pm to 5pm"
        level="Beginner"
        mode="Physical"
        description="Learn the basic knowledge of chess and start your chess career to be a master"
      />
      
      <CourseCard
        title="Intermediate Chess class"
        instructor="Coach Pradeep"
        schedule="Every Tueday at 3pm to 5pm and every Saturday from 2pm to 4 pm"
        level="Intermediate"
        mode="Physical"
        description="Students who know the basic knowledge of chess can join with this course to upskill their tactical and theoritical knowledge"
      />
      <CourseCard
        title="Advance Chess Class"
        instructor="Coach Adeepa"
        schedule="Every Sunday from 6 pm to 8pm"
        level="Advance"
        mode="Physical"
        description="Students who have rating and also who got selected to all island tournament can be participate to upgrade their positional and strategical play"
      />
      <CourseCard
        title="Practise Day"
        instructor="Coach Praeep"
        schedule="Every Wednesday from 3 pm to 6pm"
        level="Intermediate and Advance"
        mode="Physical"
        description="Students can practise themselves for a game from here"
      />
      </div>
      </>
  )
}

export default Courses
