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
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import FormHandling from './components/FormHandling'
import ParentComp from './components/ParentComp'
import ModalChild from './components/ModalChild'
import Modal from './components/Modal'
import Render from './components/Render'
import Counter from './components/Counter'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/Context'

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

      {/* <NameList /> */}
      {/* <StyleSheet primary={true}/>
      <Inline /> */}

      {/* <FormHandling /> */}
      {/* <ParentComp /> */}

      {/* <Modal>
        <ModalChild />
      </Modal> */}
      {/* <Render>
        {(count, incrementCount) => <Counter count={count} incrementCount={incrementCount}/>}
      </Render> */}

      <UserProvider value="I am passed down the tree">
        <ComponentA />
      </UserProvider>
    </div>
  )
}

export default App
 