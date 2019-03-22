import React, { Component } from "react";

/**
 * Knight probably needs no props. It has a position, but there's no reason for the Knight to know it, because it can be positioned by being placed into a Square as a child.
 */
export class Knight extends Component {
  render() {
    return <span>{"♘"}</span>;
  }
}

export default Knight;
