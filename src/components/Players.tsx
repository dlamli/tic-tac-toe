import { PlayersProps } from "../libs/types";
import Player from "./Player";

const Players = ({ activePlayer }: PlayersProps) => {
  return (
    <ol id="players" className="highlight-player">
      <Player
        playerName="Player#1"
        symbol="X"
        isActive={activePlayer === "X"}
      />
      <Player
        playerName="Player#2"
        symbol="O"
        isActive={activePlayer === "O"}
      />
    </ol>
  );
};

export default Players;
