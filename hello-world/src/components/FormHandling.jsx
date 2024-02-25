import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comment: "",
         option: "react"
      }
 }

   handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handleInputChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleOptionChange = event => {
        this.setState({
            option: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        alert( `${this.state.username} ${this.state.comment} ${this.state.option}`)
    }
 
  render() {
    const { username, comment, option } = this.state;
    
    return (
      <form action="" onSubmit={this.handleSubmit} className='flex flex-col gap-4'>
        <div className='flex  items-center justify-center'>
            <label>Username</label>
            <input type="text" value={username} onChange={this.handleInputChange}/>
        </div>
        <div className='flex  items-center justify-center'>
            <label>Comments</label>
            <textarea value={comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div className='flex  items-center justify-center'>
            <select value={option} onChange={this.handleOptionChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit' className="bg-black text-white p-4 rounded-2xl shadow-2xl">submit</button>
      </form>
    )
  }
}

export default FormHandling
