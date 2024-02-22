import React from 'react'

const Greet = (props) => {
  return (
   <>
     <h1 className='font-bold text-3xl tracking-widest'>
      Hi everybody! My name is {props.name} 
    </h1>
    {props.children}
   </>
    
  )
}

export default Greet
