
import React from 'react'

const Course = ({course}) => {

    return (
      <div>
        {course.name}
  
        <ul>
          {course.parts.map(part => 
          <li key= {part.id}>
          {part.name} {part.exercises}
          </li>
        )}
  
          <li>total of <ExerciseNumber course={course}/> exercises</li>
        </ul>
      </div>
    )
  }
  
  const ExerciseNumber = ({course}) => {
  
    const onlyExercises = course.parts.map(part => part.exercises)
    const sum = onlyExercises.reduce((total, exercises) => {
      return total + exercises;
    });
  
    return (
      <>
        {sum}
      </>
    )
  }
  
  
export default Course