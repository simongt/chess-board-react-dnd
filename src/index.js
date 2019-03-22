import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/chess-board/Board";
import { observe } from "./components/Game";
import "./stylesheets/global.css";

// the React app's entry point code
const mountNode = document.getElementById("root");

// wrap entire app in an observer to subscribe to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model), all that is needed in this case is a stream of values
observe(knightPosition =>
 ReactDOM.render(<Board knightPosition={knightPosition} />, mountNode)
);
