import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import { observe } from "./components/util/KnightObserver";
import "./stylesheets/global.css";

// chess board demo
const App = () => {
  // since all that is needed in this simple demo is a stream of values, entire app is wrapped by an observer that subscribes to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model)
  const [knightPosition, setKnightPosition] = useState([1,7]);
  // the observe function will return an unsubscribe callback
  useEffect(() =>
    observe(
      newPosition => setKnightPosition(newPosition)
    )
  );
  return (
    <div>
      <Board knightPosition={knightPosition} />      
    </div>
  );
}

export default App;
