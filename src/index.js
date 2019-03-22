import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/chess-board/Board";
import { observe } from "./components/Game";
import "./stylesheets/global.css";

// the React app's entry point code
const mountNode = document.getElementById("root");

// wrap entire app in an observer to perform actions by the knight
observe(knightPosition =>
 ReactDOM.render(<Board knightPosition={knightPosition} />, mountNode)
);
