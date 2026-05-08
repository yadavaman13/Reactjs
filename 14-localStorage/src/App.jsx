import React from 'react'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState([])

  const userDetail = {
    name: 'aman',
    age: '18',
    stack: 'MERN'
  }

  localStorage.setItem('user',JSON.stringify(userDetail)) //add item in localstorage , by converting in string format

  const item = JSON.parse(localStorage.getItem('user')); //getItem gives item in string format. so, parse in JSON

  console.log(item)

  //localStorage.removeItem('user');

  //localStorage.clear(); //clear the localstorage


  return (
    <div>
    </div>
  )
}

export default App
