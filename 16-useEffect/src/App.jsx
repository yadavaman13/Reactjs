import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log('use effect is running')
  },[num])


  {/**changing A , B */}
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('value of a changed')
  }

  function bChanging(){
    console.log('value of b changed')
  }

  useEffect(function(){
    aChanging()
  },[a])

  return (
    <div>
      <h1>num = {num}</h1>
      <h1>num2 = {num2}</h1>
      <button
        onMouseEnter={()=>{
          setNum(num+1)
        }}

        onMouseLeave={()=>{
          setNum2(num+10)
        }}
      >Click</button>
      <br/><br/>


      <h1>Value of a is {a}</h1>
      <h1>Value of b is {b}</h1>
      <button
        onClick={()=>{
          setA(a+1)
        }}
      >Change A</button>
      <button
        onClick={()=>{
          setB(b-1)
        }}
      >Change B</button>
    </div>
  )
}

export default App
