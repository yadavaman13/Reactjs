import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by",name);

    setName('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type='text' 
        placeholder='Enter your name'
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        >
        </input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
