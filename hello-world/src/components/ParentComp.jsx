import React, { Component } from 'react'
import MemoComp from './MemoComp'
 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Learning ReactJs"
      }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                message: "Learning ReactJs"
            })
        }, 2000)
    }
  render() {
    console.log("******** Parent Component *******")
    return (
      <div>
        This is parent Component 
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
