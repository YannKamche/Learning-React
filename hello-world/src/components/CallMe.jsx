import React from 'react'

const CallMe = ({name, message}) => {
  return (
    <div>
      <p>My name is {name}</p>
      <p>{message}</p>
    </div>
  )
}

export default CallMe
