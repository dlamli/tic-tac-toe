import { useState } from "react";
import { deriveActivePlayer } from "../libs/utils";
import { GameBoardSymbol, GameTurnProps } from "../libs/types";
import { initialGameBoard, WINNING_COMBINATIONS } from "../libs/constants";

export const useGameTurn = () => {
  const [players, setPlayers] = useState<{
    [key in GameBoardSymbol]: string;
  }>({
    X: "Player#1",
    O: "Player#2",
  });
  const [gameTurns, setGameTurns] = useState<GameTurnProps[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol as keyof typeof players];
    }
  }

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
