import { PLAYERS, PLAYERS_SYMBOL } from "../libs/constants";
import { PlayersProps } from "../libs/types";
import Player from "./Player";

const Players = ({ activePlayer, onPlayerNameChange }: PlayersProps) => {
  return (
    <ol id="players" className="highlight-player">
      <Player
        playerName={PLAYERS.X}
        symbol={PLAYERS_SYMBOL.X}
        isActive={activePlayer === PLAYERS_SYMBOL.X}
        onChangeName={onPlayerNameChange}
      />
      <Player
        playerName={PLAYERS.O}
        symbol={PLAYERS_SYMBOL.O}
        isActive={activePlayer === PLAYERS_SYMBOL.O}
        onChangeName={onPlayerNameChange}
      />
    </ol>
  );
};

export default Players;
