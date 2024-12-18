import { useCallback, useState } from "react";

export const usePlayer = (
  initialName: string,
  symbol: string,
  onChangeName: (symbol: string, newName: string) => void
) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = useCallback(() => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }, [isEditing, onChangeName, playerName, symbol]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(e.target.value);

  return {
    // Variables
    isEditing,
    playerName,
    // Methods
    handleEditClick,
    handleChange,
  };
};
