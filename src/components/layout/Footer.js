import React, { Component } from "react";

class Footer extends Component {
  render() {
    const hrefFooter = {
      color: "rgba(241, 91, 49, 1)",
      textDecoration: "none",
      fontWeight: "700",
      textShadow: "1.5px 1.5px 0px black"
    };
    return (
      <footer
        style={{
          padding: "0 0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"
        }}
      >
        <p style={{ fontSize: "1em", textTransform: "uppercase" }}>
          <a
            href="https://github.com/simongt/chess-board-react-dnd"
            target="_blank"
            rel="noopener noreferrer"
            style={hrefFooter}
          >
            {"Chess Board (React-DnD)"}
          </a>
        </p>
        <p style={{ fontSize: "1em", textTransform: "uppercase" }}>
          {"Developed by "}
          <a
            href="https://simongt.net"
            target="_blank"
            rel="noopener noreferrer"
            style={hrefFooter}
          >
            {"Simon G. Tsegay"}
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
