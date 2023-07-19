import React from 'react'

const Person = ({persons, filter, Delete}) => {


    return (
        <>
            {
                persons.filter(person => person.name.match(new RegExp(filter, "i")))
                .map(person =>  (
                <div key={person.name}>
                    <li>{person.name} {person.number} </li>
                    <button value={person.id} onClick={e => Delete(e.target.value)}>delete</button>
                </div>
                )
            )}
        </>
    )
}

export default Person