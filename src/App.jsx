import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import { observe } from "./components/util/KnightObserver";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "8rem 1fr 2rem",
        overflow: "hidden"
      }}
    >
      <Header />
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Board knightPosition={knightPosition} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
