export type GameBoardSymbol = "X" | "O";

export interface PlayersProps {
  activePlayer: GameBoardSymbol;
}

export interface PlayerProps {
  playerName: string;
  symbol: string;
  isActive: boolean;
}

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  gameTurns: GameTurnProps[];
}

export interface GameBoardRowProps {
  row: (string | null)[];
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

export type InitialGameBoardProps = (string | null)[][];
