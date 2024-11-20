import { useRef } from "react"

const FocusInput = () => {

    const inputElement = useRef();
    const addName=()=>{
        inputElement.current.focus();
    }

  return (
    <div>
        <input type="text" placeholder="Enter name" ref={inputElement} />
        <button onClick={()=>addName()} >Add Name</button>
    </div>
  )
}

export default FocusInput