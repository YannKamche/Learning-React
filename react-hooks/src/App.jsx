import React from 'react'
import Counter from './components/Counter'
import Object from './components/Object'
import Array from './components/Array'
import Effect from './components/Effect'
import EffectOnce from './components/EffectOnce'
import ButtonHook from './components/ButtonHook'
import IntervalCounter from './components/IntervalCounter'
import DataFetching from './components/DataFetching'
import ComponentA from './components/ComponentA'
import CounterReducer from './components/CounterReducer'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen'>
      {/* <Counter /> */}
      {/* <Object /> */}
      {/* <Array /> */}
      {/* <Effect /> */}
      {/* <EffectOnce /> */}
      {/* <ButtonHook /> */}
      {/* <IntervalCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value="Hello World">
        <ChannelContext.Provider value="How are you?">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
       */}
      <CounterReducer />
    </div>
  )
}

export default App
