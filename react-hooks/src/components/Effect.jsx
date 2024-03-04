import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    const handleCount = () => setCount(count + 1)

    const handleChange = e => setName(e.target.value)

    useEffect(() => {
        console.log("Updating the document title")
        document.title = `Clicked ${count}`
    }, [count])
  return (
    <div>
      <button 
      onClick={handleCount}
      className='bg-black text-white text-3xl p-3 rounded-md'>
        Click me {count}
    </button>
    <input type="text" name="name" id="" value={name} onChange={handleChange} />
    </div>
  )
}

export default Effect
