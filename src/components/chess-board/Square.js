import React, { Component } from "react";

/**
 * I chose white as the default background color (to match the browser defaults), so then I added a black boolean prop. Square may accept a single child, i.e. the chess piece that is currently on it.
 */

class Square extends Component {
  render() {
    const { blackSquare, children } = this.props;

    const fill = blackSquare
      ? "hsla(240, 66%, 10%, 1)"
      : "hsla(25, 75%, 90%, 1)";

    const stroke = blackSquare
      ? "hsla(25, 75%, 90%, 1)"
      : "hsla(240, 66%, 10%, 1)";

    // color shouldn't depend on square, but which player the piece belongs to, doesn't make sense to change entire color, just add an outline to the piece
    const squareStyle = {
      background: fill,
      color: "transparent",
      WebkitTextStroke: `1px ${stroke}`,
      textAlign: "center"
    };

    return <div style={squareStyle}>{children}</div>;
  }
}

export default Square;
