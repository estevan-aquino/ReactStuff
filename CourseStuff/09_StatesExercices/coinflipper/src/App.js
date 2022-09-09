import React, { Component } from 'react'
import CoinFlipper from './CoinFlipper';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
          <CoinFlipper />
          <CoinFlipper />
    </div>
    )
  }
}

export default App;
