import React, { useState } from 'react'

const Object = () => {
    //initial value
    const stdName = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(stdName)
    
    //getName
    const getName = e => {
        setName(prevName => ({
            ...prevName,
            [e.target.name]: e.target.value
        }))
    }
  return (
    <div>
      <form action="" className='flex flex-col gap-3'>
        <input 
            className='input'
            type="text" 
            name='firstname' 
            value={name.firstName} 
            placeholder='First Name'
            onChange={getName}/>

        <input 
            className='input'
            type="text" 
            name='lastname' 
            value={name.lastName}
            placeholder='Last Name'
            onChange={getName}/>
      </form>
      <p className='text-3xl font-extrabold tracking-widest'>{JSON.stringify(name)}</p>
    </div>
  )
}

export default Object
