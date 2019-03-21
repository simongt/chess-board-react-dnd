import React, { Component } from "react";

/**
 * Piece probably needs no props. It has a position, but there's no reason for the Piece to know it, because it can be positioned by being placed into a Square as a child.
 */

class Piece extends Component {
  render() {
    const { icon } = this.props;
    return (
      <span>{`${icon}`}</span>
    );
  }
}

export default Piece;
