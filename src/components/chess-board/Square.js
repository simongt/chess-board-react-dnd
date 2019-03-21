import React, { Component } from "react";

/**
 * It is tempting to give Square its position via props, but this is not necessary, because the only information it really needs for the rendering is the color. I'm going to make Square white by default, and add a black boolean prop. And of course Square may accept a single child: the chess piece that is currently on it. I chose white as the default background color to match the browser defaults.
 */

class Square extends Component {
  render() {
    const { black, children } = this.props;
    const fill = black ? "hsla(240, 66%, 10%, 1)" : "hsla(25, 75%, 90%, 1)";
    const stroke = black ? "hsla(25, 75%, 90%, 1)" : "hsla(240, 66%, 10%, 1)";
    const squareStyle={
      background: fill,
      color: stroke,
      textShadow: `0px 0px 0px ${stroke}`,
      textAlign: "center",
    };
    return (
      <div style={squareStyle}>
        {children}
      </div>
    );
  }
}

export default Square;
