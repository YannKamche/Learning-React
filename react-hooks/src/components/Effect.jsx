import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `Clicked ${count}`
    })
  return (
    <div>
      <button 
      onClick={handleCount}
      className='bg-black text-white text-3xl p-3 rounded-md'>
        Click me {count}
    </button>
    </div>
  )
}

export default Effect
