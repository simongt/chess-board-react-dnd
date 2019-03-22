import React, { Component } from "react";
import Board from "./chess-board/Board";

let knightPosition = [1, 7];
let observer = null;

// check that knight moves in L shapes (according to the rules of chess)
export const isValidKnightMove = (toX, toY) => {
  const [x, y] = knightPosition; // destructure two-item array
  const dx = Math.abs(toX - x); // if dx is 1, dy needs to be 2
  const dy = Math.abs(toY - y); // if dx is 2, dy needs to be 1
  return (
    (dx === 2 && dy === 1) || (dx === 1 && dy === 2) // L shape
  );
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};

export const observe = o => {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }
  observer = o;
  emitChange();
};

const emitChange = () => {
  observer(knightPosition);
};

class Game extends Component {
  render() {
    return (
      <div>
        {/* <Board knightPosition={knightPosition} /> */}
      </div>
    );
  }
}

export default Game;
