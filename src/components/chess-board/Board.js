import React from "react";
import Square from "../chess-board/Square";
import Knight from "../chess-set/Knight";
import { isValidKnightMove, moveKnight } from "../Game";

const renderSquare = (i, [knightX, knightY]) => {
  // i: board position, x: column, y: row
  const x = i % 8;
  const y = Math.floor(i / 8);
  // check if square contains knight piece
  const isKnightHere = knightX === x && knightY === y;
  // determine of the square is black (or white)
  const black = (x + y) % 2 === 1;
  // if square contains knight piece, render it out
  const piece = isKnightHere ? <Knight /> : null;
  // render out the square
  return (
    <div 
      key={i} 
      style={{
        width: "12.5%",
        height: "12.5%",
      }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square key={i} black={black}>
        {piece}
      </Square>
    </div>
  );
};

const handleSquareClick = (toX, toY) => {
  if (isValidKnightMove(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100vmin",
        height: "100vmin",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "10vmin",
        border: "1px solid black",
      }}
    >
      {squares}
    </div>
  )
}

// import Square from "./Square";
// import Piece from "../chess-set/Piece";

// const getPieceOnSquare = (col, row, pieces) => {
//   let pieceOnSquare = null;
//   const pieceIsHere = pieces.some(piece => {
//     const pieceCol = piece.position[0];
//     const pieceRow = piece.position[1];

//     pieceOnSquare = (pieceCol === col) && (pieceRow === row) ? piece : null;

//     return (pieceCol === col && pieceRow === row);
//   });
//   if (pieceIsHere) {
//     console.log("Board --> getPieceOnSquare --> piece found on square");
//   }
//   return pieceOnSquare;
// };

// // render a board square, check if a game piece is on it
// const renderSquare = (boardPosition, pieces) => {
//   const col = boardPosition % 8;
//   const row = Math.floor(boardPosition / 8);
  
//   const squareIsBlack = (col + row) % 2 === 1;
  
//   // let pieceOnSquare = null;
  
//   // const pieceIsHere = pieces.some(piece => {
//   //   const pieceCol = piece.position[0];
//   //   const pieceRow = piece.position[1];

//   //   pieceOnSquare = (pieceCol === col) && (pieceRow === row) ? piece : null;

//   //   return (pieceCol === col && pieceRow === row);
//   // });

//   const pieceOnSquare = getPieceOnSquare(col, row, pieces);

//   const piece = pieceOnSquare ? (
//     <Piece icon={pieceOnSquare.icon.fill} />
//   ) : null;
  
//   return (
//     <Square
//       key={boardPosition}
//       style={{ width: "100%", height: "100%" }}
//       blackSquare={squareIsBlack}
//       whiteSquare={!squareIsBlack}
//       col={col}
//       row={row}
//       pieces={pieces}
//       handleSquareClick={handleSquareClick}
//     >
//       {piece}
//     </Square>
//   );
// }

// // check for existing piece at target location, and validate possible moves by specific pieces (e.g. knights move in L shapes)
// export const isValidMove = (toCol, toRow, pieces) => {
//   console.log("Board --> isValidMove: col " + toCol + ", row " + toRow);
  
//   // check for existing piece at target location
//   let pieceOnTarget = getPieceOnSquare(toCol, toRow, pieces);

//   // TO-DO:
//   // validate possible moves by specific pieces (e.g. knights move in L shapes)
  
//   return !pieceOnTarget;
// }

// export const handleSquareClick = (toCol, toRow, pieces) => {
//   console.log("Board --> handleSquareClick: col " + toCol + ", row " + toRow);
//   if (isValidMove(toCol, toRow, pieces)) {
//     movePiece(toCol, toRow, pieces);
//   }
// }

// // let knightPosition = [0, 1];
// let observer = null;

// const emitChange = () => {
//   observer(knightPosition);
// }

// export const observe = o => {
//   if (observer) {
//     throw new Error("Multiple observers not implemented.");
//   }
//   observer = o;
//   emitChange();
// }

// export const movePiece = (toCol, toRow, pieces) => {
//   console.log("Board --> movePiece: col " + toCol + ", row " + toRow);
  
//   // knightPosition = [toCol, toRow];
//   // console.log(knightPosition);
  
// }

// /**
//  * Board owns the Squares, but it also needs to own Piece because each piece needs to be placed inside one of those Squares. This means that the Board needs to know the piece's current position.
//  */
// class Board extends Component {
//   render() {
//     const { board } = this.props;
//     const squares = [];
//     const pieces = [];
//     for (const piece in board) {
//       pieces.push(board[piece]);
//     };
//     for (let i = 0; i < 64; i++) {
//       squares.push(renderSquare(i, pieces));
//     }
//     return (
//       <div style={boardStyle}>
//         {squares}
//       </div>
//     )
//   }
// }

// const boardStyle = {
//   fontSize: "4rem",
//   border: "1px solid black",
//   padding: "0.5rem",
//   width: "100%",
//   height: "100%",
//   display: "grid",
//   gridGap: "0",
//   gridTemplateColumns: "repeat(8, 1fr)",
//   gridTemplateRows: "repeat(8, 1fr)",
//   gridAutoFlow: "row",
// };

// export default Board;
