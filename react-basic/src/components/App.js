import React, { useState } from 'react';
// import css from external css file 
import '../assets/css/style.css'
import Event from './Event'

// css style object
// let styleObj = {
//     backgroundColor: 'red',
//     padding: '2rem',
//     textAlign: 'center',
//     color: 'white',
//     fontSize: '34px'
// }

// hello from functional component
function App({ Name }) { // passing props
    // initialize state 
    const [image, imageState] = useState(false)

    // click handler for toggle image show/hide
    function toggleImage() {
        imageState(!image)
        console.log(`State Now ${image}`)
    }

    return (
        <div className="box">
            <h1>Hello From {Name}</h1>
            <Event clickMe={toggleImage}/>
            <div>
                {image ? <img className="toggleImage" src="https://i.ytimg.com/vi/PwofRNGX3dw/hqdefault.jpg" /> : null}
            </div>
        </div>
    )
}

// hello from class component


// class app extends React.Component {
//     // passing props
//     constructor(props) {
//         super(props);
//         this.state = {
//             showImage: false
//         }
//     }
//     // click handler for toggle image show/hide
//     toggleImage = () => {
//         this.setState({ showImage: !this.state.showImage }) // toggle effect
//         console.log(`State Now ${this.state.showImage}`)
//     }
//     render() {
//         return (
//             <div className="box">
//                 <h1>Hello From {this.props.Name}</h1>
//                 <button onClick={this.toggleImage} className="toggleBtn">Toggle Image</button>
//                 <div>
//                     {this.state.showImage ? <img className="toggleImage" src="https://i.ytimg.com/vi/PwofRNGX3dw/hqdefault.jpg" /> : null}

//                 </div>
//             </div>
//         )
//     }
// }


export default App;