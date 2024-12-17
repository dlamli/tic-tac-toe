import { GameBoardProps, InitialGameBoardProps } from "../libs/types";
import GameBoardRow from "./GameBoardRow";

const initialGameBoard: InitialGameBoardProps = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, gameTurns }: GameBoardProps) => {
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

  const gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
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
