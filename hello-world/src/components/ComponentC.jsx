import React, { Component } from 'react'
import { UserConsumer } from './Context'

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => <h1>{username}</h1>}
      </UserConsumer>
    )
  }
}

export default ComponentC
