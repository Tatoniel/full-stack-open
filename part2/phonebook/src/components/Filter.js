import React from 'react'

const Filter = ({setFilter, filter}) => {
    return (
      <div>
        filter: <input
            type="text"
            name="search"
            value={filter}
            onChange={e => setFilter(e.target.value)}
        />
      </div>
    )
  }

export default Filter