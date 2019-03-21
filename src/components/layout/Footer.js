import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          color: "white",
          fontSize: "1em",
          textTransform: "uppercase",
          padding: "0 0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            `linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.8)
            )`,
        }}
      >
        <p>
          {"Source code on "}
          <a
            href="https://github.com/simongt/chess-board-react-dnd"
            target="_blank"
            rel="noopener noreferrer"
            style={hrefFooter}
          >
            {"GitHub"}
          </a>
        </p>
        <p>
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

const hrefFooter = {
  color: "rgba(241, 91, 49, 1)",
  textDecoration: "none",
  fontWeight: "700",
  textShadow: "1.5px 1.5px 0px black"
};

export default Footer;
