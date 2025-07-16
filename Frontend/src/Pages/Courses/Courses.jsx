import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'

const Courses = () => {
  return (
    <>
    <div>
    <CourseCard
        title="Beginner Chess Tactics"
        instructor="Coach Adeepa"
        schedule="Mon & Wed, 5PM - 6PM"
        level="Beginner"
        mode="Online"
        description="Learn the basic tactical motifs every chess player should know."
      />
      
      <CourseCard
        title="Advanced Strategy"
        instructor="GM Nihal"
        schedule="Tue & Thu, 6PM - 7:30PM"
        level="Advanced"
        mode="Offline"
        description="Dive into positional play, endgames, and complex strategies."
      />
      </div>
      </>
  )
}

export default Courses
