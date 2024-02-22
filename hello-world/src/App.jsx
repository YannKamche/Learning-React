import React from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-300 gap-3'>
      <Welcome name="Bruce">
        <p className='text-2xl font-semibold tracking-tighter'>I am super Hero coming to save you</p>
      </Welcome>
    </div>
  )
}

export default App
