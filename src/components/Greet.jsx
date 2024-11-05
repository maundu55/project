import React from 'react'

const Greet = () => {
  const hello = "Good afternoon"
  const name ="Mary Maundu"
  const time = new Date();
  return (
    <div>
        <h1>{hello}  {name}</h1>
        <p>It is {time.getFullYear()}</p>
    </div>
  )
}

export default Greet