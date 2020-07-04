import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // change state
    counter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                {this.counter}
                <button onClick={this.counter}>{this.state.count} times</button>
            </div>
        )
    }
}

export default ClassComponent