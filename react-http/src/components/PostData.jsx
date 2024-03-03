import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
        console.log(this.state)
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(error => console(error))
    }
  render() {
    const { userId, title, body } = this.state
    return (
      <div>
        <form action="" className='flex flex-col gap-4'>
            <div>
                <input type="text" name='userId' value={userId} onChange={this.onChangeHandler}/>
            </div>
            
            <div>
                <input type="text" name='title' value={title} onChange={this.onChangeHandler}/>
            </div>
            
            <div>
                <input type="text" name='body' value={body} onChange={this.onChangeHandler}/>
            </div>
            <button className='bg-black text-white rounded-md p-3' onClick={this.onSubmitHandler}>Send</button>
        </form>
      </div>
    )
  }
}

export default PostData
