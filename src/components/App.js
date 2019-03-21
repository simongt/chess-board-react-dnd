import React, { Component } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import "../stylesheets/global.css";

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div
          className="App"
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            gridTemplateRows: "12rem 1fr 2rem",
            overflow: "hidden"
          }}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
