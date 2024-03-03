import React from 'react'
import Counter from './components/Counter'
import Object from './components/Object'

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen'>
      {/* <Counter /> */}
      <Object />
    </div>
  )
}

export default App
