import { useContext, useState } from 'react';
import { UserContext } from './UserProvider';

const UpdateUser = () => {

    const {updateUser} = useContext(UserContext)

    const [newName, setNewName] = useState('');

    const handleSubmit = e=>{
        e.preventDefault();

        if(newName.trim()){
            UpdateUser(newName)
            setNewName('')
        }
    }
  
  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
    <input type="text"
    value={newName} 
    onChange={(e)=> setNewName(e.target.value)}
    placeholder='Enter new name'/>
        </form>

        <button type='submit'>Update User</button>
    </div>
  )
}

export default UpdateUser