import React, { useState } from 'react'
import EffectOnce from './EffectOnce'

const ButtonHook = () => {
    const [display, setDisplay] = useState(true)
    
    const handleClick = () => {
        setDisplay(!display)
    }

  return (
    <div>
      <button className='text-white bg-black p-3 rounded-md shadow-md' onClick={handleClick}>Toggle Me</button>
      {display && <EffectOnce />}
    </div>
  )
}

export default ButtonHook
