import React, { createContext, useState }from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const UserContext = createContext();

const UserProvider = ({children}) =>{
  const [user, setUser] = useState ({name:''})

  const updateUser = (newName) =>{
    setUser({name: newName})
  }

  return <UserContext.Provider value={{ user, updateUser }}>
   {children }
   <UserProfile user={name} />
   <UpdateUser />
   
  </UserContext.Provider>
}

export default UserProvider