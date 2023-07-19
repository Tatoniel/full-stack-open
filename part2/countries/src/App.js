import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Filter from './components/Filter'


const App = () => {
  const [countries, setCountries] =useState([])
  const [filter, setFilter] = useState('')
  const [show, setShow] =useState({})
  
  useEffect(() =>{
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data
      .map(({name, capital, population, languages, flags}) => ({
        name: name.common,
        capital: capital,
        population: population,
        languages: languages,
        flags: flags
      })))
    })
  },[])

  const handleChange = (e) => {
    setFilter(e.target.value)
    setShow('')
  }
  return (
    <div>
      Find countries: <input 
      type="text" 
      value={filter}
      name= "search"
      onChange={e => {handleChange(e)}}/>
      <h2>Countries</h2>
      <Filter
      countries={countries} 
      filter={filter} 
      show={show}
      setShow={setShow}
      />
    </div>
  )
}

export default App