import Pokecard from './Pokecard';
import Pokegame from './Pokegame';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenButton from './BrokenButton';
import './App.css';

function App() {
  return (
  <div className="App" >

    <Game />
    <Rando maxNum={7}/>
    <Button />
    <BrokenButton maxNum={10} />
      
  </div>
  )
}

export default App;
