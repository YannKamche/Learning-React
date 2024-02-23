import React from 'react'

const ClassClick = () => {

    const clickHandler = () => {
        console.log("I was clicked")
    }
  return (
    <div>
      <button className='bg-black text-white p-5 rounded-md' onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default ClassClick
