import GameBoardColumn from "./GameBoardColumn";
import { GameBoardRowProps } from "../libs/types";

const GameBoardRow = ({ row, rowIndex, onClick }: GameBoardRowProps) => {
  return (
    <li>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <GameBoardColumn
            key={colIndex}
            rowIndex={rowIndex}
            colIndex={colIndex}
            playerSymbol={playerSymbol}
            onClick={onClick}
          />
        ))}
      </ol>
    </li>
  );
};

export default GameBoardRow;
