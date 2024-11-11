import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount =()=>{
    setCount(count+1)
  }


  return (
    <div>
      <br />
      <h3>{count}</h3>
      <button onClick={addCount}>
        Increment
      </button>
    </div>
  )
}

export default Counter