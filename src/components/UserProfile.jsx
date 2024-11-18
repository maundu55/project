import React, {useContext}from 'react'
import { profileContext } from './UserContext'

const profile = useContext(profileContext);

const UserProfile = () => {
  return (
    <div>
        <h2>{profile.name} {profile.age}</h2>
    </div>
  )
}

export default UserProfile