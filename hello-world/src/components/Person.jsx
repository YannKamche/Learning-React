import React from 'react'

const Person = ({person}) => {
  return (
    <>
      {`${person.id} ${person.name} ${person.age} ${person.skill} `}
    </>
  )
}

export default Person
