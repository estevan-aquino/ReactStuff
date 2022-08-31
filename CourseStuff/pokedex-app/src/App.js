import Pokecard from './Pokecard';
import Pokegame from './Pokegame';
import Game from './Game';
import Rando from './Rando'
import './App.css';

function App() {
  return (
  <div className="App" >

    <Game />
    <Rando maxNum={7}/>
      
  </div>
  )
}

export default App;
