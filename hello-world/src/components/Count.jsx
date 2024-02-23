import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
     
      this.state = {
         count: 0
      }
    }

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => console.log(this.state.count)) //second parameter call back function
    //     // console.log(this.state.count)
    // }
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
      <>
        <p className='text-3xl font-bold tracking-wider'>Counter: {this.state.count}</p>
        <button className='bg-black text-white p-4 rounded-md shadow-lg' onClick={() => this.increment()}>Increment</button>
        <button className='bg-black text-white p-4 rounded-md shadow-lg' onClick={() => this.incrementFive()}>Increment</button>
      </>
    )
  }
}

export default Count
