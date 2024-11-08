import React from 'react'

const UserStatus = (props) => {
  
    if(props.loggedIn && props.Admin){
        return <h1>Welcome Admin</h1>
    }else{
        return <h2>Please log in</h2>
    }
}

export default UserStatus