import React, { createContext }from 'react'
import UserProfile from './UserProfile';

export const profileContext = createContext();

const UserContext = () => {
   const profile = {
    name:'Mary',
    age:30
   }
  return (
     <>
     <profileContext.Provider value={profile}>
        <UserProfile />
     </profileContext.Provider>
     </> 


  )
}

export default UserContext