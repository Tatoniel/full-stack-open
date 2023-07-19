import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Current = ({Country}) => {
  const [weather, setWeather] = useState([])

  useEffect(() =>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${Country[0].capital}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const Weather = [response.data];
      setWeather(Weather
      .map(({main, wind, weather}) => ({temp: main.temp, wind: wind.speed, icon : weather[0].icon})))
  }).catch(error => { 
    console.log(error);
  })
  },[Country])

    return(
      <div>
        {
          Country
          .map(country => (
          <div key={country.name}>
            <h3>
              {country.name}
            </h3>
          <p>Capital: {country.capital}</p>
          <p>Population:{country.population}</p>
          <h4>Languages</h4>
          <div>{Object.values(country.languages).map(language => <p key={language}>{language}</p>)}</div>
          <img alt={country.name} src={country.flags.png}></img>
          <h4>Weather in {country.capital}</h4>
        </div>))
        }
        {
          weather.map(weather => (
            <div key={weather.temp}>
              <p><strong>temperature:</strong> {Math.round(weather.temp - 273)} Celcius</p>
              <img alt="icon" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
              <p><strong>wind:</strong> {Math.round(weather.wind * 2.237)} mph</p>
            </div>
          ))
        }
      </div>
    )
  }

export default Current