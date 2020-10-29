import React from 'react'

export default class Event extends React.Component {
    
    constructor(props){
        super(props)
    }

    UpdateState = () => {
        this.props.myHandler(true)
    }

    render() {
        return (
             <button onClick={this.UpdateState} className="toggleBtn">Toggle Image</button> 
            // <h1>Hello from Event Component</h1>
        )
    }
}