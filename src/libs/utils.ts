import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./constants";
import {
  GameBoardSymbol,
  GameTurnProps,
  InitialGameBoardProps,
  Players,
} from "./types";

export const deriveActivePlayer = (gameTurns: GameTurnProps[]) => {
  let currentPlayer: GameBoardSymbol = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === currentPlayer) {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const deriveGameBoard = (gameTurns: GameTurnProps[]) => {
  const gameBoard = [
    ...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray]),
  ];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export const deriveWinner = (
  gameBoard: GameBoardSymbol[][] | InitialGameBoardProps[][],
  players: Players
) => {
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
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};
