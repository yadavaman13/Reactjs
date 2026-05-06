import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <div className='parent'>
      <Card user='Aman' bio='N/A' img='https://images.unsplash.com/photo-1768210837703-6fe5f5afbaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Sarthack' bio='Sheryians' img='https://images.unsplash.com/photo-1776549821153-070eaa245bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Ankur' bio='Sheryians' img='https://images.unsplash.com/photo-1770026741532-8d8f8a5a5e20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
    </>
  )
}

export default App
