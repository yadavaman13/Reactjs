import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.json()

    console.log(data)
  }


  async function getData(params) {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    // console.log(response.data)

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
  }

  const [author, setAuthor] = useState([])

  const showData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setAuthor(response.data)
  }


  return (
    <div>
      <button onClick={showData}>Click me</button>
      {author.map(function(elem,idx){
        return <h1>Hello,{elem.author} {idx}</h1>
      })}
    </div>
  )
}

export default App
