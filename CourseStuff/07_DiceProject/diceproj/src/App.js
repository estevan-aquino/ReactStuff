import React, { Component } from 'react'
import RollDice from './RollDice.js'
import './RollDice.css'
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
          <RollDice />
    </div>
    )
  }
}

export default App;
