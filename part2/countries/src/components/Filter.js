import React from 'react'
import Current from './Current'

const Filter = ({countries, filter, setShow, show, weather, setWeather}) => {

    const Filtered = countries.filter(country => country.name.match(new RegExp(filter, "i")))

    const Show = countries.filter(country => country.name.match(new RegExp(show, "i")))
    
    return (
      <div>
        {
          Filtered.length > 10 && <div>Too many matches</div>
        }
        {
          Filtered.length <= 10 &&
          Filtered.length > 1 && 
          Filtered
          .map(country => (
          <div key={country.name}>
            {country.name} <button value={country.name} onClick={e => {setShow(e.target.value)}}>show</button>
          </div>))
        }
        {
          Filtered.length === 1 && <Current Country={Filtered}/>
        }
        {
          Show.length === 1 && <Current Country={Show}/>
        }
        
      </div>  
    )
  }

export default Filter