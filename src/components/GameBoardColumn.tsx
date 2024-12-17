import { GameBoardColumnProps } from "../libs/types";

const GameBoardColumn = ({
  rowIndex,
  colIndex,
  playerSymbol,
  onClick,
}: GameBoardColumnProps) => {
  return (
    <li>
      <button onClick={() => onClick(rowIndex, colIndex)} disabled={playerSymbol !== null}>
        {playerSymbol}
      </button>
    </li>
  );
};

export default GameBoardColumn;
