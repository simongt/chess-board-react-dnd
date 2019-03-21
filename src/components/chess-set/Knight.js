import React, { Component } from "react";

import { iconSet } from "../chess-set/IconSet";

/**
 * Knight probably needs no props. It has a position, but there's no reason for the Knight to know it, because it can be positioned by being placed into a Square as a child.
 */

class Knight extends Component {
  state = {
    icon: ""
  };

  componentDidMount() {
    this.setState(prevState => ({
      icon: iconSet.knight.icon.fill
    }));
  }

  render() {
    const {
      icon
    } = this.state;
    const chessPieceStyle = {};
    return (
      <span style={chessPieceStyle}>{`${icon}`}</span>
    );
  }
}

export default Knight;
