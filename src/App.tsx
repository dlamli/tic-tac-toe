import { useState } from "react";

import { GameBoardSymbol, GameTurnProps } from "./libs/types";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnProps[]>([]);
  const [activePlayer, setActivePlayer] = useState<GameBoardSymbol>("X");

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer: GameBoardSymbol = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === currentPlayer) {
        currentPlayer = "O";
      }

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
