import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Aman'
        }
        // this.clickMe = this.clickMe.bind(this)
    }

    clickMe = () => {
        this.setState({
            name: 'Aman Sultan Baig'
        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name} from Class Component</h1>
                <button onClick={this.clickMe}>Click ME</button>
            </div>
        )
    }
}

export default ClassComponent