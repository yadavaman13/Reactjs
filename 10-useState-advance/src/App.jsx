import React, { useState } from 'react'

const App = () => {

  {/**Objects */}
  const [user, setUser] = useState({name:'sarthack',age:22})

  const btnClicked = () => {
    const newUser = {...user}
    newUser.name = 'Aman'
    newUser.age = 21
    setUser(newUser)
  }

  {/**Array */}
  const [arr, setArr] = useState([10,20,30])

  const changeArr = () => {
    const newArr = [...arr]
    newArr.push(99)
    newArr.push(100)
    setArr(newArr)
  }

  {/**batch */}
  const [num, setNum] = useState(0)

  const changeNum = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return (
    <div>
      <h1>{user.name},{user.age}</h1>
      <button onClick={btnClicked}>Click</button>

      <h2>{arr}</h2>
      <button onClick={changeArr}>Click</button>

      <h3>{num}</h3>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
