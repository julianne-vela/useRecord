/* eslint-disable max-len */
import { useState } from 'react';

export const useRecord = () => {
  // set current value
  const [currentValue, setCurrentValue] = useState();

  // create a function to record a new current value
  const recordColorChange = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  // create a function that sets the current value to the previous value (aka, undo)

  // create a function that sets the current value forward in history (aka, redo)

  return {
    currentValue,
    recordColorChange,
  };
};
