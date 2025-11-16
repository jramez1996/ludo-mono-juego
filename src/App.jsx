import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import Settings from './components/Settings';
import { GameProvider} from './context/GameContext';
import GameOver from './components/GameOver';
import PlayerChance from './components/PlayerChance';

function App() {
  const [boardRotate, setBoardRotate] = useState(0);

  return (
    <GameProvider>
      <GameOver />
      <div className='mobile-current-player'>
      <PlayerChance />
      </div>
      <br />
       <Dice />
        <div id="board-container" style={{transform: `rotate(${boardRotate}deg)`}}>
          <Board />
        </div>
       
    </GameProvider>
  );
}

export default App;
