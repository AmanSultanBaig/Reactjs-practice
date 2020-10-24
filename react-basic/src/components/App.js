import React from 'react';
// import css from external css file 
import '../assets/css/style.css'

// css style object
// let styleObj = {
//     backgroundColor: 'red',
//     padding: '2rem',
//     textAlign: 'center',
//     color: 'white',
//     fontSize: '34px'
// }

// hello from functional component
function app({Name}) {
    // passing props
    return (
        <div className="box">
            <h1>Hello From {Name}</h1>
        </div>
    ) 
}

// hello from class component
// class app extends React.Component {
//     // passing props
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div className="box">
//                 <h1>Hello From {this.props.Name}</h1>
//             </div>
//         )
//     }
// }


export default app;