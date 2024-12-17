import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";

import { GameTurnProps } from "./libs/types";
import { deriveActivePlayer } from "./libs/utils";

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnProps[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} />
        <GameBoard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
