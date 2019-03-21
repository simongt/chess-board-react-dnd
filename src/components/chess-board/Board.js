import React, { Component } from "react";

import Square from "./Square";
import Piece from "../chess-set/Piece";

/**
 * Board owns the Squares, but it also needs to own Piece because each piece needs to be placed inside one of those Squares. This means that the Board needs to know the piece's current position.
 */

const renderSquare = (boardPosition, pieces) => {
  const col = boardPosition % 8;
  const row = Math.floor(boardPosition / 8);
  const blackSquare = (col + row) % 2 === 1;
  let pieceOnSquare = null;
  const pieceIsHere = pieces.some(piece => {
    const pieceCol = piece.position[0];
    const pieceRow = piece.position[1];
    pieceOnSquare = pieceCol === col && pieceRow === row ? piece : null;
    return (pieceCol === col && pieceRow === row);
  });
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

class Board extends Component {
  render() {
    const { board } = this.props;
    const squares = [];
    const pieces = [];
    for (const piece in board) {
      pieces.push(board[piece]);
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
