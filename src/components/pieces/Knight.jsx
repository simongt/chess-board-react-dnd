import React, { Component } from "react";
import { DragSource } from "react-dnd";
import ItemTypes from "../constants/ItemTypes";

// draggable object
const knightSource = {
  beginDrag(props) {
    return {};
  },
}

// collecting function
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

class Knight extends Component {
  render() {
    const {
      connectDragSource,
      // connectDragPreview,
      isDragging
    } = this.props;
    const knightStyle = {
      cursor: "pointer",
      opacity: `${isDragging} ? 0.5 : 1`,
    };
    return connectDragSource(
      <span style={knightStyle}>
      {/* <span style={ Object.assign({}, knightStyle, { isDragging })}> */}
        {"♘"}
      </span>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
