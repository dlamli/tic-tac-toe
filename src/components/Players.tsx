import { PLAYERS } from "../libs/constants";
import Player from "./Player";

const Players = () => {
  return (
    <ol id="players">
      {PLAYERS.map((player) => (
        <Player playerName={player.playerName} symbol={player.symbol} />
      ))}
    </ol>
  );
};

export default Players;
