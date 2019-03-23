import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import { observe } from "./components/util/KnightObserver";
import "./stylesheets/global.css";

// Chess Board Demo
const App = () => {
  // wrap entire app in an observer to subscribe to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model), all that is needed in this case is a stream of values
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
