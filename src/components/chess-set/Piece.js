import React, { Component } from "react";

class Piece extends Component {
  render() {
    const { icon } = this.props;
    return (
      <span>{`${icon}`}</span>
    );
  }
}

export default Piece;
