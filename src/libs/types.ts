export type GameBoardSymbol = "X" | "O";

export interface PlayersProps {
  activePlayer: GameBoardSymbol;
  onPlayerNameChange: (symbol: string, newName: string) => void;
}

export interface PlayerProps {
  playerName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: string) => void;
}

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameTurnProps[] | InitialGameBoardProps[][];
}

export interface GameBoardRowProps {
  row: GameTurnProps | InitialGameBoardProps[];
  rowIndex: number;
  onClick: (rowIndex: number, colIndex: number) => void;
}

export interface GameBoardColumnProps {
  playerSymbol: string | null;
  rowIndex: number;
  colIndex: number;
  onClick: (rowIndex: number, colIndex: number) => void;
}

export interface GameTurnProps {
  square: { row: number; col: number };
  player: GameBoardSymbol;
}

export interface LogProps {
  gameTurns: GameTurnProps[];
}

export interface GameOverProps {
  winner: GameBoardSymbol | string | undefined;
  onRestart: () => void;
}

export type InitialGameBoardProps = string | null;

export type WinningCombinationProps = {
  row: number;
  col: number;
};
