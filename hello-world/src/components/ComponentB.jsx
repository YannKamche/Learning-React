import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './Context'

class ComponentB extends Component {

  static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentC />
      </div>
    )
  }
}


export default ComponentB
