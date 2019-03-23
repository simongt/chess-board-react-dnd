import React from "react";
import SquareWrapper from "./SquareWrapper";
import Knight from "../pieces/Knight";
import withDragDropContext from "../../lib/withDragDropContext";

// chess board component
const Board = ({ knightPosition: [knightX, knightY] }) => {

  // generate "smart" squares (aware of piece's position)
  const renderSquare = (i) => {
    
    // i: board position, x: column, y: row
    const x = i % 8;
    const y = Math.floor(i / 8);
    const piece = renderPiece(x, y);
    
    // render out the square
    return (
      <div key={i} style={squareStyle}>
        <SquareWrapper x={x} y={y}>
          {piece}
        </SquareWrapper>
      </div>
    );
  }

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

  // CRITICAL NOTE: the bottom return statement produces an error: "Cannot have two HTML backends at the same time".

  // return (
  //   <DragDropContextProvider backend={HTML5Backend}>
  //     <div style={boardStyle}>{squares}</div>
  //   </DragDropContextProvider>
  // );

  // Need to use the singleton pattern to ensure only a single instance of DragDropContext is initialized throughout app. Credit fix to @gcorne, https://github.com/react-dnd/react-dnd/issues/186#issuecomment-282789420, and @nickangtc for courteously sharing this fix: https://github.com/react-dnd/react-dnd/issues/740#issuecomment-299686690. 
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

export default withDragDropContext(Board);
