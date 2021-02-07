import React from "react";

export const Square = ({ squareIsBlack, children }) => {
  const fill = squareIsBlack
    ? "hsla(240, 66%, 10%, 1)"
    : "hsla(25, 75%, 90%, 1)";

  const stroke = squareIsBlack
    ? "hsla(25, 75%, 90%, 1)"
    : "hsla(240, 66%, 10%, 1)";

  const squareStyle = {
    backgroundColor: fill,
    color: stroke,
    // WebkitTextStroke: `1px ${stroke}`,
    // textAlign: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return <div style={squareStyle}>{children}</div>;
};
