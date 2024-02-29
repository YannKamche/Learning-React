import React, { Component } from 'react'

class Counter extends Component {
   
  render() {
     const {count, incrementCount} = this.props
    return (
      <button onClick={incrementCount} className='p-4 text-3xl bg-black text-white'>
        Clicked {count} times 
      </button>
    )
  }
}

export default Counter
