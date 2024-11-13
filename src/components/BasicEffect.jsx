import React, { useEffect, useState } from 'react'



const BasicEffect = () => {
    const [count, setCount]= useState(1);

    const handleClick=()=>{
        setCount(count+1)
    }

useEffect (()=>{

    console.log('rendered first time')
}, []);
  return (
    <div>
        <h3>{count}</h3>
        {/* <button onClick={handleClick}> Click</button> */}
    </div>
  )
}

export default BasicEffect