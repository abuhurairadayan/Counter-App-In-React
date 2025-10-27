import React from 'react'
import { useState } from 'react'
import '../App.css'
import { FaRedo } from 'react-icons/fa'

const CounterInReact = () => {

    const [count, setCount] = useState(0)

    function increment () {
      setCount(count + 1)
    }
    function decrement() {
  setCount(count => (count > 0 ? count - 1 : 0));
}
    function reset () {
      setCount(0)
    }
 


  return (
    <div className='count-container'>
      <h1>Count: {count}</h1>
      <div className='button-container'>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}><FaRedo/></button>
    </div>
    </div>
  )
}

export default CounterInReact
