import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
          alignItems: "center"
        }}
      >
        <h2 style={{fontSize: "10vw"}}>{"🤓👋🌎"}</h2>
      </div>
    );
  }
}

export default Main;
