import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter >= 20)
    {
      alert("cannot increase further")
    }
    else {
      setCounter(counter + 1);
    }
  }

  const removeValue =() => {
    if(counter>0) {
      setCounter(counter - 1);
    } else {
      alert("cannot decrease less than 0 (zero)")
    }
  }

  return (

    <>

      <h1>AfzalBoi counter</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
