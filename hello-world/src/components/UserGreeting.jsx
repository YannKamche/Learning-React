import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    // Short circuit operator
    return this.state.isLoggedIn && <div>Welcome to this new world</div>

    // //Ternary approach
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome to this new world</div>
    //     : <div>Welcome Guest</div>
    // )

    // //Using element variable
    // let message //stores the element to be rendered
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome to this new world</div>
    // } else 
    //     message = <div>Welcome Guest</div>

    //     return <div>{message}</div>


    //Using if else
    // if (this.state.isLoggedIn) {
    //     return(
    //         <div>Welcome to this new World</div>
    //     )
    // } else {
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome to this New World</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
