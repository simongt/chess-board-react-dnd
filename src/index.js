import React from "react";
import { render } from "react-dom";
import App from "./App";

// the React app's entry point code
const mountNode = document.getElementById("root");

// render App component within the mount (root) node
render(<App />, mountNode);
