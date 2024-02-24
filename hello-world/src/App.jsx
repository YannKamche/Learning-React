import React from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Count from './components/Count'
import ClassClick from './components/ClassClick'
import CallMe from './components/CallMe'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-300 gap-3'>
      {/* <Welcome name="Bruce">
        <p className='text-2xl font-semibold tracking-tighter'>I am super Hero coming to save you</p>
      </Welcome> */}

      {/* <Count /> */}
      {/* <ClassClick /> */}

      {/* <CallMe name="Bruce" message="Welcome to this new World!"/> */}
      {/* <EventBinding /> */}

      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}

      <NameList />
    </div>
  )
}

export default App
 