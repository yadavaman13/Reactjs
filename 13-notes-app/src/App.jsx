import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title,description})

    setTask(copyTask)
    localStorage.setItem('Note',JSON.stringify(copyTask))  //json to string

    setTitle('');
    setDescription('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx,1)
    localStorage.removeItem(idx)

    setTask(copyTask)
  }

  const tasks = JSON.parse(localStorage.getItem('Note')) //string to json

  return ( 
    <div className='h-screen lg:flex bg-[#08090A] text-zinc-500'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col lg:w-1/2 items-start p-10 gap-4'>
          <h1 className='text-4xl mb-4 font-bold'>Notes App</h1>
          <input 
            type='text'
            placeholder='Enter your task'
            className='px-5 py-2 w-full outline-none font-medium border-2 rounded border-[#27272A]'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />

          <textarea
            type='text' 
            placeholder='Enter Description' 
            className='px-5 py-2 w-full outline-none font-medium h-20 rounded border-2 border-[#27272A]' 
            value={description} 
            onChange={(e)=>{setDescription(e.target.value)}}
          />

          <button className='bg-[#18181B] text-zinc-500 active:scale-95 font-medium outline-none w-full px-5 py-2 rounded'>Add Note</button>  
      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt- overflow-auto h-[90%]'>
          {task.map(function(elem,idx){

            return <div key={idx} className=" flex justify-between flex-col break-all items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h1 className='leading-tight font-bold text-lg'>{tasks[idx].title}</h1>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-500'>{tasks[idx].description}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-gray-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div> 
          })}  
        </div>
      </div>
    </div>
  )
}

export default App
