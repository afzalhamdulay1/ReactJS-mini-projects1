import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str += "0123456789";
    }
    if(charAllowed) {
      str += "~!@#$%^&*()-_+={}[]|\:;"
    }

    for(let i = 1;i <= length;i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[numAllowed,charAllowed,password,length])

  const copyPass = useCallback(()=>{
    passRef.current?.select();
    // to select only part of text in input box
    // note: this will only show on the screen the range that we give here but the whole text will be copied to clipboard
    // passRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    alert("text copied successfully")
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600'>
    <h1 className='text-4xl text-center mb-4'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 w-full'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
        <button className='px-3 bg-blue-700 outline-none text-white shrink-0' onClick={copyPass}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numAllowed} id='numInput' onChange={()=>{setNumAllowed(!numAllowed)}}/>
          <label htmlFor="numInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numAllowed} id='charInput' onChange={()=>{setCharAllowed((prev) => !prev)}}/>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
