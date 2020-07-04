import React from 'react';
import ReactDOM from 'react-dom';
import FuncationalComponent from './components/functionalComponent'
import ClassComponent from './components/classComponent'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <FuncationalComponent name="Aman Sultan Baig"/>
    {/* stateless component */}
    <ClassComponent /> 
    {/* stateful component */}
  </div>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
