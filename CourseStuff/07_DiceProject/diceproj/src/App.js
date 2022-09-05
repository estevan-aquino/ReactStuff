import React, { Component } from 'react'
import Dice from './Dice.js'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <Dice face='one'/>
//         <Dice face='two'/>
//         <Dice face='three'/>
//         <Dice face='four'/>
//         <Dice face='five'/>
//     </div>
//   );
// }

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Dice face='one'/>
          <Dice face='two'/>
          <Dice face='three'/>
          <Dice face='four'/>
          <Dice face='five'/>
        </div>
    </div>
    )
  }
}

export default App;
