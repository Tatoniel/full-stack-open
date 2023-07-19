import React from 'react'

const Add = ({addName, newNumber, handleNameChange, handleNumChange, newName}) => {
    return (
      <>
        <h2>Add</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br></br>
          number: <input value={newNumber} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </>
    )
  }

export default Add