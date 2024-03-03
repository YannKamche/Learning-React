import React from 'react'
import PostList from './components/PostList'
import PostData from './components/PostData'

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen'>
      {/* <PostList /> */}
      <PostData />
    </div>
  )
}

export default App
