import { GameBoardProps } from "../libs/types";
import GameBoardRow from "./GameBoardRow";

const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex: number, colIndex: number) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <GameBoardRow
          key={rowIndex}
          rowIndex={rowIndex}
          row={row}
          onClick={onSelectSquare}
        />
      ))}
    </ol>
  );
};

export default GameBoard;
