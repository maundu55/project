import React, { useContext}from 'react'
import { UserContext } from './ComponentA'

const ComponentD = () => {

    const user = useContext(UserContext);
  return (
    <div className='box'>
        <h2>ComponentD</h2>
        <h4>{`Bye again ${user}`}</h4>
    </div>
  )
}

export default ComponentD