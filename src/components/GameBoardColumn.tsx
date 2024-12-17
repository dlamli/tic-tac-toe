import { GameBoardColumnProps } from "../libs/types";

const GameBoardColumn = ({
  rowIndex,
  colIndex,
  playerSymbol,
  onClick,
}: GameBoardColumnProps) => {
  return (
    <li>
      <button onClick={() => onClick(rowIndex, colIndex)}>
        {playerSymbol}
      </button>
    </li>
  );
};

export default GameBoardColumn;
