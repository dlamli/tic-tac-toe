import { useId } from "react";
import { GameBoardProps } from "../libs/types";
import GameBoardRow from "./GameBoardRow";

const initialGameBoard: GameBoardProps = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const rowId = useId();
  return (
    <ol id="game-board">
      {initialGameBoard.map((row) => (
        <GameBoardRow key={rowId} row={row} />
      ))}
    </ol>
  );
};

export default GameBoard;
