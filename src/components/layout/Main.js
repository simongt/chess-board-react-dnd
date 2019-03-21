import React, { Component } from "react";

import Board from "../chess-board/Board";
import { initPositions } from "../chess-set/IconSet";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div
        className="Main"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {/* <h2 style={{fontSize: "10vw"}}>{"🤓👋🌎"}</h2> */}
        <Board piecePosition={initPositions.knight1.position} />
      </div>
    );
  }
}

export default Main;
