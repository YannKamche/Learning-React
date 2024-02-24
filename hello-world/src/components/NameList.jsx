import React from 'react'
import Person from './Person';

const NameList = () => {

    const countries = ["Cameroon", "America", "Nigeria", "South Africa", "Cameroon"];
    const musicGenres = ["Afrobeat", "AmaPiano", "Seben", "Jazz", "Pop", "Bikutsi"]

    const persons = [
        {
            id: 1,
            name:'Bruce',
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: "Ruby"
        }
    ]
  return (
    <div className='flex gap-4'>
      {musicGenres.map(music => (
        <div key={music} className='bg-black text-white p-3 rounded-md shadow-xl'>{music}</div>
      ))}
      {
        countries.map((country, index) => (
            <div key={index} className='bg-black text-white p-3 rounded-md shadow-xl'>{country}</div>
        ))
      }
      {/* {
        persons.map(person => (
        <div className='bg-black text-white p-3 rounded-md shadow-2xl'>
            <Person key={person.id} person={person}/>
        </div>))
      } */}
    </div>
  )
}

export default NameList
