import { GameOverProps } from "../libs/types";
import GameResult from "./GameResult";

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <GameResult content={`${winner} won!`} />}
      {!winner && <GameResult content={`It's a draw!`} />}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
