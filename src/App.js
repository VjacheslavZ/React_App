import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

// class App extends Component {
//
//   render() {
//     const element = <h1>Hello, world</h1>;
//
//
//     return (
//       <div className="App">
//
//       </div>
//     );
//   }
// }

//export default App;

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);


// class Welcome extends Component {
//     render () {
//         return <h1>hello, {this.props.name} </h1>
//     }
// }

class MyFunc extends Component {


}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


export default Welcome;





