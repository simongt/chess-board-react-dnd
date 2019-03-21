import React, { Component } from "react";

import Board from "../chess-board/Board";
import { initBoard } from "../chess-set/IconSet";

export const observe = receive => {
  const interval = 1000;
  setInterval(() => {
    receive([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)])
  }, interval);
  
}

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
        {/* <Board piecePosition={initBoard.knight2.position} /> */}
        <Board initBoard={initBoard} />
      </div>
    );
  }
}

export default Main;
