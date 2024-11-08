import React from 'react'
import { useState } from 'react';

const Friends = () => {
    const [friends, setFriends] =useState(['Alex', 'Mary', 'John']);

    const addOneFriend =()=>setFriends([...friends, 'Mary']);

    const removeFriend =()=>setFriends(friends.filter((f) => f!=='John'))
  return (
    <div>
        <br />
        {friends.map((f) =>(
                <li key={Math.random()}>{f}</li>
            ))}
        <button onClick={addOneFriend}>Add new friend</button>
        <button onClick={removeFriend}>remove one Friend</button>
    </div>
  )
}

export default Friends