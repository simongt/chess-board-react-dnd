import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { Square } from "./Square";
import { isValidKnightMove, moveKnight } from "../util/KnightObserver";
import ItemTypes from "../constants/ItemTypes";
import Overlay from "../util/Overlay";

// drop target specification that only handles the drop event
const squareTarget = {
  canDrop({ x, y }) {
    return isValidKnightMove(x, y);
  },
  drop({ x, y }) {
    // The drop method receives the props of the BoardSquare so it knows where to move the knight when it drops
    moveKnight(x, y);
  }
}

// TO-DO: explore the purpose of !!
const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: !!monitor.isOver(),
  canDrop: !!monitor.canDrop(),
});

class SquareWrapper extends Component {
  render() {
    const { x, y, connectDropTarget, isOver, canDrop, children } = this.props;
    // alternate square colors, determine if it is black or white by its position
    const squareIsBlack = (x + y) % 2 === 1;
    // connect the drop target and show the highlight overlay
    return connectDropTarget(
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Square squareIsBlack={squareIsBlack}>{children}</Square>
        {/* no longer dragging, invalid drop location */}
        {isOver && !canDrop && <Overlay color="red" />}
        {/* still dragging, but valid drop location */}
        {!isOver && canDrop && <Overlay color="yellow" />}
        {/* no longer dragging, valid drop location */}
        {isOver && canDrop && <Overlay color="green" />}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(SquareWrapper);