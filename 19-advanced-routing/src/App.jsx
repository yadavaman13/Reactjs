import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import NotFoundPage from './pages/NotFoundPage'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Child from './pages/Child'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          {/**Dynamic Routing */}
          <Route path='/courses/:courseId' element={<CourseDetail />} />

          {/**Nested Routing */}
          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='child' element={<Child/>} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App