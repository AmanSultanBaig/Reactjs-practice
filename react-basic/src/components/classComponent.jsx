import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            status: true
        }
    }

    render() {
        if (this.state.status === true) {
            return <button>Login</button>
        }else {
            return <button>Logout</button>
        }
        // return (
        //     <div>
        //     </div>
        // )
    }
}

export default ClassComponent