import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const myObj = {
    "name":"afzalBoi",
    "age": 21
  }

  const myArr = [1,2,3]


  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>AfzalBoi tailwind Test</h1>
      <Card title="my Lappy" btnText="read more" customObj={myObj} />
      <Card title="macbook lappy" customArr={myArr} />
    </>
  )
}

export default App
