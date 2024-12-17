import { GameBoardSymbol, GameTurnProps } from "./types";

export const deriveActivePlayer = (gameTurns: GameTurnProps[]) => {
    let currentPlayer: GameBoardSymbol = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === currentPlayer) {
      currentPlayer = "O";
    }

    return currentPlayer;
}