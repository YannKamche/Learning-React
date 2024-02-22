import React , { Component } from 'react'

class Welcome extends Component {
    
    render() {
        
        return (
            <>
                <h1 className='font-bold text-3xl tracking-widest'>Hi everybody! My name is {this.props.name} </h1>
                {this.props.children}
            </>
        )
    }
}

export default Welcome