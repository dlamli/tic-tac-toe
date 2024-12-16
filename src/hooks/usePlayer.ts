import { useCallback, useState } from "react";

export const usePlayer = (initialName: string) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = useCallback(
    () => setIsEditing((prevIsEditing) => !prevIsEditing),
    []
  );

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
