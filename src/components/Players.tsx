import { PLAYERS } from "../libs/constants";
import { PlayersProps } from "../libs/types";
import Player from "./Player";

const Players = ({ activePlayer, onPlayerNameChange }: PlayersProps) => {
  return (
    <ol id="players" className="highlight-player">
      <Player
        playerName={PLAYERS.X}
        symbol="X"
        isActive={activePlayer === "X"}
        onChangeName={onPlayerNameChange}
      />
      <Player
        playerName={PLAYERS.O}
        symbol="O"
        isActive={activePlayer === "O"}
        onChangeName={onPlayerNameChange}
      />
    </ol>
  );
};

export default Players;
