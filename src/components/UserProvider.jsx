import React, { createContext, useState }from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const UserContext = createContext();

const UserProvider = () =>{
  const [user, setUser] = useState ({name:'Mary'})

  const updateUser = (newName) =>{
    setUser({name: newName});
  }

  return <UserContext.Provider value={{ user, updateUser }}>
   <UserProfile />
   <UpdateUser/>
   
  </UserContext.Provider>
}

export default UserProvider