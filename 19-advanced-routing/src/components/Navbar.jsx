import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 color bg-cyan-700'>
        <h2 className='text-xl font-bold'>Sheryians</h2>
        <div className='flex gap-8'>
            <Link className='text-lg font-bold' to='/'>Home</Link>
            <Link className='text-lg font-bold' to='/about'>About</Link>
            <Link className='text-lg font-bold' to='/courses'>Courses</Link>
            <Link className='text-lg font-bold' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar