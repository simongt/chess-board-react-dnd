import React, { Component } from "react";

/**
 * It is tempting to give Square its position via props, but this is not necessary, because the only information it really needs for the rendering is the color. I'm going to make Square white by default, and add a black boolean prop. And of course Square may accept a single child: the chess piece that is currently on it. I chose white as the default background color to match the browser defaults.
 */

class Square extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Square;
