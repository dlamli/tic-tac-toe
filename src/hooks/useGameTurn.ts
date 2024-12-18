import { useState } from "react";
import {
  deriveActivePlayer,
  deriveGameBoard,
  deriveWinner,
} from "../libs/utils";
import { GameTurnProps, Players } from "../libs/types";
import { PLAYERS } from "../libs/constants";

export const useGameTurn = () => {
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurnProps[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

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

  const handleRematch = () => setGameTurns([]);

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return {
    // Variables
    winner,
    hasDraw: gameTurns.length === 9 && !winner,
    gameTurns,
    activePlayer,
    gameBoard,
    // Methods
    handleSelectSquare,
    handleRematch,
    handlePlayerNameChange,
  };
};
