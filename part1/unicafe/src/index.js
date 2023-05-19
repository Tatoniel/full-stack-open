import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GoodButton = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const BadButton = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const NeutralButton = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({all, average, positive, good, bad, neutral}) =>{
  if(all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good:" value={good}/>
          <StatisticLine text="neutral:" value={neutral}/>
          <StatisticLine text="bad:" value={bad}/>
          <StatisticLine text="all:" value={all}/>
          <StatisticLine text="average:" value={average}/>
          <StatisticLine text="positive:" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = bad + neutral + good
  const average = (good - bad) / all
  const positive = (good * 100) / all
  
  return (
    <div>
      <h2>Give feedback</h2>
      <GoodButton handleClick={()=> setGood(good + 1)} text="Good"/>
      <NeutralButton handleClick={()=> setNeutral(neutral + 1)} text="Neutral"/>
      <BadButton handleClick={()=> setBad(bad + 1)} text="Bad"/>
      <Statistics all={all} average={average} positive={positive} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)