import React, { Component } from "react";

import Square from "./Square";
import Knight from "../chess-set/Knight";

/**
 * The Board is tricky. It makes no sense to pass Squares as children to it, because what else could a board contain? 
 * 
 * Therefore it probably owns the Squares. But then, it also needs to own the Knight because this guy needs to be placed inside one of those Squares. This means that the Board needs to know the knight's current position.
 * 
 * In a real Chess game, the Board would accept a data structure describing all the pieces, their colors and positions, but for us, a knightPosition prop will suffice. We will use two-item arrays as coordinates, with [0, 0] referring to the A8 square. Why A8 instead of A1? To match the browser coordinate orientation. I tried it another way and it just messed with my head too much.
 */

class Board extends Component {
  render() {
    const boardStyle = {
      fontSize: "4rem", // adapt for mobile, set to 2rem
      border: "1px solid black",
      padding: "0.5rem",
      zIndex: "1"
    };
    return (
      <div style={boardStyle}>
        <Square blue>
          <Knight />
        </Square>
        <Square>
          <Knight />
        </Square>
      </div>
    )
  }
}

export default Board;
