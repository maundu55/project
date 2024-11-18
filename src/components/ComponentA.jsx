import React, {useState, createContext} from 'react';
import '/src/index.css'
import ComponentB from './ComponentB';

export const UserContext = createContext();

const ComponentA = () => {

    const [user, setUser] = useState("Mary");
  return (
    <div className='box'>
        <h2>ComponentA</h2>
        <h4>{`Hello ${user}`}</h4>
        <UserContext.Provider value={user}>
            <ComponentB user ={user} />
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA