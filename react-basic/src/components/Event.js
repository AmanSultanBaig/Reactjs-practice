import React from 'react'

export default class Event extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
             <button onClick={this.props.clickMe} className="toggleBtn">Toggle Image</button> 
            // <h1>Hello from Event Component</h1>
        )
    }
}