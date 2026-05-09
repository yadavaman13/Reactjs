import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [user, setUser] = useState([])
  const [index, setIndex] = useState(1)

  async function getData(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    const data = await response.data
    setUser(data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-500 font-semibold text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>


  if(user.length>0){
    printUserData = user.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-4 p-4'>
        <button 
          style={{ opacity: index == 1 ? 0.6 : 1}}
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUser([])
            }
          }}
          className='bg-gray-700 text-white font-bold active:scale-95 text-lg px-7 py-2 rounded-full'>Previous
        </button>
        <h4>Page {index}</h4>
        <button 
          onClick={()=>{
            setIndex(index+1)
            setUser([])
          }}
          className='bg-gray-700 text-white font-bold active:scale-95 text-lg px-7 py-2 rounded-full'>Next
        </button>
      </div>
    </div>
  )
}

export default App
