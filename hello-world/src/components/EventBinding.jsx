import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello",
      }

    //   this.clickHandler = this.clickHandler.bind(this);
    }

     clickHandler = () => {
        this.setState({
            message: "Welcome"
        })
    }
    
  render() {
    return (
      <div className='flex flex-col gap-3'>
        <p className='text-center text-5xl font-extrabold tracking-wider'>{this.state.message}</p>
        {/* <button className='text-white p-5 rounded-lg bg-black shadow-orange-600 shadow-2xl font-semibold tracking-widest' onClick={this.clickHandler.bind(this)}> */}
        {/* <button className='text-white p-5 rounded-lg bg-black shadow-orange-600 shadow-2xl font-semibold tracking-widest' onClick={() => this.clickHandler()}> */}
        {/* <button className='text-white p-5 rounded-lg bg-black shadow-orange-600 shadow-2xl font-semibold tracking-widest' onClick={this.clickHandler}> */}
        <button className='text-white p-5 rounded-lg bg-black shadow-orange-600 shadow-2xl font-semibold tracking-widest' onClick={this.clickHandler}>
            Click Me
        </button>
      </div>
    )
  }
}

export default EventBinding
