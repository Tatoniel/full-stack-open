import React from 'react';
import Part from './Parts';


const Course = ({course}) => {
    
    let exercisesArray = course.parts.map(part => part.exercises)

    const total = exercisesArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);


    return(
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map(part => (
                <Part key={part.id} part={part} 
                />)
                )}
            </ul>
            <p>Total of {total} exercises</p>
        </div>
    )
}

export default Course