// Command Pattern Diagram:
// Client-- > Receiver-- > < --Command < --Invoker

/**
 *
 * @param {*} param0
 */

// create commands for addColor, undoColor, & redoColor
function addColor({ target: { value } }) {
  // execute();
  // -- store ORIGINAL value prior to changes
  // -- add new color to state
  // -- add command to undoStack
  // -- clear redoStack
  /////////////////////////////////////////
  // undo();
}

function undoColor() {
  // -- grabs the last command from undoStack,
  // -- executes it's undo method to restore ORIGINAL state,
  // -- and places the command in the redoStack;
  // execute();
  // undo();
}

function redoColor() {
  // -- grabs the last command from redoStack,
  // -- executes it's redo method to restore NEW state,
  // -- and places the command in the undoStack;
  // execute();
  // undo();
}

/**
 *
 * @param {type} normalAction
 * @param {type} undoAction Reverses the previous action
 * @param {type} actionValue the value of the given action
 */

const Command = function (normalAction, undoAction, actionValue) {
  this.execute = normalAction;
  this.undo = undoAction;
  this.value = actionValue;
};

const addColorCommand = function (color) {
  return new Command(addColor, undoColor, color);
};

const undoColorCommand = function (color) {
  return new Command(undoColor, redoColor, color);
};

const redoColorCommand = function (color) {
  return new Command(redoColor, undoColor, color);
};

export const useColorHistory = () => {};
