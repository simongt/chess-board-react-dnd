import React, { Component } from "react";

import Square from "./Square";
// import Knight from "../chess-set/Knight";
import Piece from "../chess-set/Piece";

/**
 * The Board is tricky. It makes no sense to pass Squares as children to it, because what else could a board contain? 
 * 
 * Therefore it probably owns the Squares. But then, it also needs to own the Knight because this guy needs to be placed inside one of those Squares. This means that the Board needs to know the knight's current position.
 * 
 * In a real Chess game, the Board would accept a data structure describing all the pieces, their colors and positions, but for us, a knightPosition prop will suffice. We will use two-item arrays as coordinates, with [0, 0] referring to the A8 square. Why A8 instead of A1? To match the browser coordinate orientation. I tried it another way and it just messed with my head too much.
 */

// helper function to generate squares and pieces within it
const renderSquare = (boardPosition, pieces) => {
  const col = boardPosition % 8;
  const row = Math.floor(boardPosition / 8);
  const blackSquare = (col + row) % 2 === 1;
  // const pieceIsHere = (pieceCol === col) && (pieceRow === row);
  // console.dir(pieces);
  let pieceOnSquare = null;
  const pieceIsHere = pieces.some(piece => {
    const pieceCol = piece.position[0];
    const pieceRow = piece.position[1];
    pieceOnSquare = pieceCol === col && pieceRow === row ? piece : null;
    return (pieceCol === col && pieceRow === row);
  });
  // const piece = pieceIsHere ? <Knight /> : null;
  const piece = pieceIsHere ? <Piece icon={pieceOnSquare.icon.fill} /> : null;
  return (
    <Square
      key={boardPosition}
      style={{ width: "100%", height: "100%" }}
      blackSquare={blackSquare}
    >
      {piece}
    </Square>
  );
}

// map thru initBoard and render out the squares with appropriate pieces on top

class Board extends Component {
  render() {
    const { initBoard } = this.props;
    // console.dir(initBoard);
    const squares = [];
    const pieces = [];
    for (const piece in initBoard) {
      pieces.push(initBoard[piece]);
    };
    
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, pieces));
    }
    return (
      <div style={boardStyle}>
        {squares}
      </div>
    )
  }
}

const boardStyle = {
  fontSize: "4rem",
  border: "1px solid black",
  padding: "0.5rem",
  width: "100%",
  height: "100%",
  display: "grid",
  gridGap: "0",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(8, 1fr)",
  gridAutoFlow: "row",
};

export default Board;
