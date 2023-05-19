import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
const [selected, setSelected] = useState(0)
const [votes, setVote] = useState(new Uint8Array(props.anecdotes))
const [voteSelected, setVoteSelected] = useState(0)


const setToSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  } 

const handleVote = () => {
  const copy = [...votes]
  copy[selected] += 1
  setVote(copy)
  let max = Math.max(...copy)
  setVoteSelected(copy.indexOf(max))
}


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]}</p>
      <button onClick={setToSelected}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[voteSelected]}</p>
      <p>Has {votes[voteSelected]}</p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)