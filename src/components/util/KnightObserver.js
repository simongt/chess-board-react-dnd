let knightPosition = [1, 7];
let observer = null;

// wrap entire app in an observer to subscribe to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model), all that is needed in this case is a stream of values
export const observe = o => {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();

  // TO-DO: explore purpose of this return statement
  return () => {
    observer = null;
  }
};

const emitChange = () => {
  observer(knightPosition);
};

// check that knight moves in L shapes (according to the rules of chess)
export const isValidKnightMove = (toX, toY) => {
  const [x, y] = knightPosition; // destructure two-item array
  const dx = Math.abs(toX - x); // if dx is 1, dy needs to be 2
  const dy = Math.abs(toY - y); // if dx is 2, dy needs to be 1
  return (
    (dx === 2 && dy === 1) || (dx === 1 && dy === 2) // L shape
  );
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};
