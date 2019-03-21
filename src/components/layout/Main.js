import React, { Component } from "react";
import Board from "../chess-board/Board";
import { initBoard } from "../chess-set/IconSet";

class Main extends Component {
  render() {
    return (
      <div
        className="Main"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center"
        }}
      >
        <Board board={initBoard} />
      </div>
    );
  }
}

export default Main;
