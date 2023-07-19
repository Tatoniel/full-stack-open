import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Persons from './components/Persons'
import personServices from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')
  
  const [alertMessage, setAlertMessage ] = useState(null)
  const [alert, setAlert ] = useState()

useEffect(()=>{
  personServices.getAll()
  .then(response => {
    setPersons(response)
  })
},[])
    

  const addName = (event) =>{
    event.preventDefault()
    
    if(persons.find(person => person.name === newName)){
        if(window.confirm(`${newName} already exists, do you want to replace it?`)){
          const personObject = {
            name: newName,
            number: newNumber
          }
          personServices.getAll()
          .then(response => 
            {
              const id = response.filter(person => person.name === newName)[0].id
              
              personServices.update(id, personObject)
              setAlertMessage(`Person Update Successfully`)
              setAlert('success')
              setTimeout(() => {
                setAlertMessage(null)
              }, 5000)
              personServices.getAll()
              .then(response => {
              setPersons(response)
              })
              setNewName('')
              setNewNum('') 
            }
            )
        }  
      }
      else{
        const personObject = {
          name: newName,
          number: newNumber
        }
        personServices.create(personObject)
        .then(response =>  {
          setAlertMessage(`Person Added successfully`)
          setAlert('success')
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
        .catch(err => {
          setAlertMessage(`Something went wrong`)
          setAlert('error')
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
        personServices.getAll()
          .then(response => {
            setPersons(response)
        })
        setNewName('')
        setNewNum('')
      }
  }
  
  const Delete = (e) => {
      if(window.confirm('Are you sure you want to delete this person?')){
          personServices.delet(e)
          .then(response => {
            setAlertMessage(`Person Deleted successfully`)
            setAlert('success')
            setTimeout(() => {
              setAlertMessage(null)
            }, 5000)
          })
          .catch(err => {
            setAlertMessage(`Person already deleted`)
            setAlert('error')
            setTimeout(() => {
              setAlertMessage(null)
            }, 5000)
          })
          personServices.getAll()
          .then(response => setPersons(response))
          
      }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumChange = (event) =>{
    setNewNum(event.target.value)
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification 
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        alert={alert}
      />
      <Filter 
        filter={filter} 
        setFilter={setFilter}
      />
      <Add 
        handleNameChange={handleNameChange} 
        handleNumChange={handleNumChange} 
        addName={addName} 
        newNumber={newNumber} 
        newName={newName}
      />
      <Persons 
        persons={persons}
        filter={filter}
        Delete={Delete}
      /> 
    </div>
  )
}

export default App