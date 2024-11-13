import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('');
        }
    };

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }


  return (
    <div>
      <h2>Todo List</h2> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new Todo'/>
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index)=>(
            <li key={index}>{todo}</li>
        ))}
      </ul>
      <br />
      <br />
    </div>
    

  )
}

export default TodoList