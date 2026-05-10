import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()

  return (
    <div className='flex bg-cyan-600 justify-center gap-2'>
        <button
            onClick={()=>{
                navigate('/')
            }}
            className='bg-cyan-400 text-2xl font-bold rounded-xl px-6 py-3' 
        >Return to Home
        </button>
        <button
            onClick={()=>{
                navigate(-1)
            }}
            className='bg-cyan-400 text-2xl font-bold rounded-xl px-6 py-3'
        >Back
        </button>
    </div>
  )
}

export default Navbar2