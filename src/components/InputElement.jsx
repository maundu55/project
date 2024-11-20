import  {useRef} from 'react'

const InputElement = () => {
    const inputElement = useRef(null);
    
    const focusInput=()=>{
        inputElement.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={()=> focusInput()}>Click</button>
    </div>
  )
}

export default InputElement