import React from "react";

export const Square = ({ squareIsBlack, children }) => {
  const fill = squareIsBlack ? "black" : "white";
  const stroke = squareIsBlack ? "white" : "black";
  const squareStyle = {
    backgroundColor: fill,
    color: stroke,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return <div style={squareStyle}>{children}</div>;
};
