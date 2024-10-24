import { useState } from "react"


const UseState = () => {
  
  const [state, setState] = useState(0)

  const increase = () => {
    return( 
      setState(prevState => prevState + 1)
    )
  }
  const decrease = () => {
    return( 
      setState(prevState => prevState - 1)
    )
  }

  const multiply = () =>{
    return setState(prevState => prevState * 2)
  }
  const divide = () =>{
    return setState(prevState => prevState / 2)
  }
  const reset = () =>{
    return setState(0)
  }

  return (
    <div>
      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
      <button onClick={multiply}>
        Multiply
      </button>
      <button onClick={divide}>
        division
      </button>
      <button onClick={reset}>
        Reset
      </button>
      <h2>
        Count {state} 
      </h2>

      
    </div>
  )
}

export default UseState