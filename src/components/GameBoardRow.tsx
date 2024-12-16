import { useId } from "react";
import GameBoardColumn from "./GameBoardColumn";

const GameBoardRow = ({ row }: { row: (string | null)[] }) => {
  const columnId = useId();
  return (
    <li>
      <ol>
        {row.map((playerSymbol) => (
          <GameBoardColumn key={columnId} playerSymbol={playerSymbol} />
        ))}
      </ol>
    </li>
  );
};

export default GameBoardRow;
