import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const resetValue=()=>{
        setCount(0)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default Count