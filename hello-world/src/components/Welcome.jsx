import React , { Component } from 'react'

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message:  `Welcome to the New World`
        }
    }
    //Modify the state
    updateMessage() {
        this.setState({
            message: "Your journey begins Now!"
        })
    }
    render() {
        
        return (
            <>
                <h1 className='font-bold text-3xl tracking-widest'>{this.state.message}</h1> 
                <button className='p-4 bg-black text-white text-xl font-medium rounded-md shadow-md'
                onClick={() => this.updateMessage()}
                >
                    Click Here
                </button>   
            </>
        )
    }
}

export default Welcome