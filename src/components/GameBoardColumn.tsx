const GameBoardColumn = ({ playerSymbol }: { playerSymbol: string | null }) => {
  return (
    <li>
      <button>{playerSymbol}</button>
    </li>
  );
};

export default GameBoardColumn;
