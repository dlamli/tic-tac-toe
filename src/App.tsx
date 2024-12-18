import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useGameTurn } from "./hooks/useGameTurn";

function App() {
  const {
    activePlayer,
    winner,
    hasDraw,
    gameTurns,
    gameBoard,
    handleSelectSquare,
    handleRematch,
    handlePlayerNameChange
  } = useGameTurn();

  return (
    <main>
      <div id="game-container">
        <Players
          activePlayer={activePlayer}
          onPlayerNameChange={handlePlayerNameChange}
        />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
