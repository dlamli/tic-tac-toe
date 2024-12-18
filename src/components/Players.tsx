import { PlayersProps } from "../libs/types";
import Player from "./Player";

const Players = ({ activePlayer, onPlayerNameChange }: PlayersProps) => {
  return (
    <ol id="players" className="highlight-player">
      <Player
        playerName="Player#1"
        symbol="X"
        isActive={activePlayer === "X"}
        onChangeName={onPlayerNameChange}
      />
      <Player
        playerName="Player#2"
        symbol="O"
        isActive={activePlayer === "O"}
        onChangeName={onPlayerNameChange}
      />
    </ol>
  );
};

export default Players;
