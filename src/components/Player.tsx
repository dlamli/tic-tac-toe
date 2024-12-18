import { PlayerProps } from "../libs/types";
import { usePlayer } from "../hooks/usePlayer";

const Player = ({
  playerName: initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerProps) => {

  const { isEditing, playerName, handleEditClick, handleChange } = usePlayer(
    initialName,
    symbol,
    onChangeName
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
