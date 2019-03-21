import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import Board from "./components/chess-board/Board";

// the React app's entry point code
const mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);
// ReactDOM.render(<Board piecePosition={[0,0]} />, mountNode);
