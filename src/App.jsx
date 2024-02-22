import { useState } from 'react'
import './App.css'
import Tooltip from './components/Tooltip/Tooltip'

function App() {
  

  return (
    <>
     
      <div className='flex h-screen justify-center items-center'>
          <Tooltip position={"top"} text={"This is a tooltip"}>
            <button className='bg-black text-white p-2 rounded-md'>Tooltip</button>
          </Tooltip>
      </div>
     
    </>
  )
}

export default App
