import React from 'react'

const Counter = ({count, onClickHandler}) => {
   const handleClick =()=> onClickHandler()
  return (

    <div>
        <br />
        <h3>{count}</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Counter