import React from "react";
import SquareWrapper from "./SquareWrapper";
import Knight from "../pieces/Knight";

// chess board component
const Board = ({ knightPosition: [knightX, knightY] }) => {
  console.log("Board --> render");
  console.log(`{ knightPosition: [${knightX}, ${knightY}] }`);

  // generate "smart" squares
  const renderSquare = (i) => {
    console.log(`Board --> render --> renderSquare(${i})`);
    
    // i: board position, x: column, y: row
    const x = i % 8;
    const y = Math.floor(i / 8);
    const piece = renderPiece(x, y);
    console.log(piece);
    
    // render out the square
    return (
      <div key={i} style={squareStyle}>
        {/* Can't get any of the squares to render */}
        <SquareWrapper x={x} y={y}>
          {piece}
        </SquareWrapper>
      </div>
    );
  };

  // check if square contains knight piece
  // if square contains knight piece, render it out
  const renderPiece = (x, y) => (
    x === knightX && y === knightY ? <Knight /> : null
  );

  // populate chess board squares along with any pieces that may be on them
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }
  return (
    <div style={boardStyle}>{squares}</div>
  );
}

// styling properties applied to the board element
const boardStyle = {
  margin: "0 auto",
  width: "100vmin",
  height: "100vmin",
  display: "flex",
  flexWrap: "wrap",
  fontSize: "10vmin",
  border: "1px solid black",
};

// styling properties applied to each square element
const squareStyle = {
  width: "12.5%",
  height: "12.5%",
};

export default Board;
