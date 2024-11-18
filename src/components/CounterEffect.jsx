import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount]= useState(0);
const handleClick=()=>{
    setCount(count+1);
}
    useEffect(()=>{
       document.title= `Count: ${count}`; 
    },[count]);
   

    
  return (
    <div>
<h3>{count}</h3>
<button onClick={handleClick}>Increase Count</button>
    </div>
  )
}

export default CounterEffect