import React from 'react'

const Hello = () => {
//   return (
//     <div>
//       <h1 className='font-bold text-3xl tracking-widest'>Hello World</h1>
//     </div>
//   )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello World'))
}

export default Hello