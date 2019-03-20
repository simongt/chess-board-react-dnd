import React, { Component } from "react";

/**
 * It is tempting to give Square its position via props, but this is not necessary, because the only information it really needs for the rendering is the color. I'm going to make Square white by default, and add a black boolean prop. And of course Square may accept a single child: the chess piece that is currently on it. I chose white as the default background color to match the browser defaults.
 */

class Square extends Component {
  render() {
    const { blue, children } = this.props;
    const fill = blue ? "hsla(240, 66%, 33%, 1)" : "hsla(25, 75%, 60%, 1)";
    const stroke = blue ? "hsla(25, 75%, 60%, 1)" : "hsla(240, 66%, 33%, 1)";
    const squareStyle={
      zIndex: "2",
      background: fill,
      color: stroke,
      textShadow: `0px 0px 0px ${stroke}`,
      width: "100%",
      height: "100%",
    };
    return (
      <div style={squareStyle}>
        {children}
      </div>
    );
  }
}

export default Square;
