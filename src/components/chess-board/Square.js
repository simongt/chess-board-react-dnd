import React from "react";

export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}


/**
 * I chose white as the default background color (to match the browser defaults), so then I added a black boolean prop. Square may accept a single child, i.e. the chess piece that is currently on it.
 */

// class Square extends Component {
//   render() {
//     const { blackSquare, children } = this.props;

//     const fill = blackSquare
//       ? "hsla(240, 66%, 10%, 1)"
//       : "hsla(25, 75%, 90%, 1)";

//     const stroke = blackSquare
//       ? "hsla(25, 75%, 90%, 1)"
//       : "hsla(240, 66%, 10%, 1)";

//     const squareStyle = {
//       background: fill,
//       color: "transparent",
//       WebkitTextStroke: `1px ${stroke}`,
//       textAlign: "center"
//     };

//     const { col, row, pieces, handleSquareClick } = this.props;
//     return (
//       <div 
//         style={squareStyle}
//         onClick={() => handleSquareClick(col, row, pieces)}
//       >
//         {children}
//       </div>
//     );
//   }
// }

// export default Square;
