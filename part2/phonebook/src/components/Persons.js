import React from 'react'
import Person from './Person'


const Persons = ({persons, filter, Delete}) => {
    return (
      <div>
        <h2>Numbers</h2>
        <ul>    
            <Person 
                persons={persons} 
                filter={filter}
                Delete={Delete}
            />
        </ul>
      </div>
    )
  }

export default Persons