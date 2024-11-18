import React, { useContext}from 'react'
import { UserContext } from './ComponentA'
import ComponentC from './ComponentC';

const ComponentB = () => {

    const user = useContext(UserContext);
  return (
    <div className='box'>
        <h2>ComponentB</h2>
        <h4>{`Bye ${user}`}</h4>
        <ComponentC />

    </div>
  )
}

export default ComponentB