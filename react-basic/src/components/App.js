import React from 'react';

// hello from functional component
function app({Name}) {
    // passing props
    return <h1>Hello From {Name}</h1>
}

// hello from class component
// class app extends React.Component {
//     // passing props
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return <h1>Hello From {this.props.Name}</h1>
//     }
// }


export default app;