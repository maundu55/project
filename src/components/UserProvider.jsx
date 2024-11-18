import React, { createContext, useState }from 'react'
import UserProfile from './UserProfile';

export const UserContext = createContext();

const UserProvider = ({children}) =>{
  const [user, setUser] = useState ({name:'Mary Maundu'})

  const updateUser = (newName) =>{
    setUser({name: newName})
  }

  return <UserContext.Provider value={{ user, updateUser }}>
   {children }
   <UserProfile user={name} />
   
  </UserContext.Provider>
}

export default UserProvider