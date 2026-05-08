import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(20)
  const [username, setUsername] = useState('Aman')

  function changeValue(){
    setNum(30);
    setUsername('Sarthack');
  }

  {/**Counter */}
  const [count, setCount] = useState(0)
  const [initialCount, setInitialCount] = useState(null)

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function jumpBy5(){
    setCount(count+5);
  }

  function intialCount(val){
    setInitialCount(val);
  }


  return (
    <div>
      <h1>Value of A is {num} <br /> Value of User is {username}</h1>
      <button onClick={changeValue}>Click</button>


      {/**Counter */}
      <div className='container'>
        <input 
        onChange={function(elem){
          intialCount(elem.target.value);
        }}
        type='text' placeholder='Enter the number to start counter'></input>

        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
        <button onClick={jumpBy5}>Increase By 5</button>
      </div>
    </div>
  )
}

export default App
