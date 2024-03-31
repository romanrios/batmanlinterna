import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // 0 -> x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) =>
  // Revisamos si hay empate si no hay más espacios vacíos
  newBoard.every((square) => square !== null);
// código alternativo:
// const checkEndGame = (newBoard) => !board.includes(null);
