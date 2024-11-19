import React, { useReducer } from 'react'

const initialState = {count: 0}

const reducer=(state, action)=>{
    switch (action.type){
        case 'increment':
            return {count: state.count+1};
        case 'reset':
            return{...state, count: 0};
        case 'decrement':
            return{count: state.count-1};
        default:
            return state;
    }

}
const CounterReducer = () => {
    const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={()=> dispatch({ type: 'increment'})}>+</button>
        <button onClick={()=>dispatch({ type: 'reset'})}>Reset</button>
        <button onClick={()=>dispatch({ type: 'decrement'})}>-</button>

    </div>
  )
}

export default CounterReducer