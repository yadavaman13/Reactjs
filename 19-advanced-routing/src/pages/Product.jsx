import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center items-center gap-8'>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/child'>Children</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Product