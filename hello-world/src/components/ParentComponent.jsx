import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Parent"
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child) {
        alert(`Greetings ${this.state.name} from ${child}`)
    }
    
  render() {
    
    return (
      <div>
        <ChildComponent greet={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
