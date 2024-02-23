import React from 'react'

const ChildComponent = ({greet}) => {
  return (
    <div>
      <button className='bg-dark text-white p-5 shadow-md rounded-lg' onClick={() => greet('child') }>Greet</button>
    </div>
  )
}

export default ChildComponent
