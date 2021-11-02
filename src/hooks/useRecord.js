/* eslint-disable max-len */
import { useState, useEffect } from 'react';

export const useRecord = (init) => {
  const [color, setColor] = useState(init);
  const [colorHistory, setColorHistory] = useState([init]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(colorHistory.indexOf(color));
  }, [color]);

  const handleAddColor = ({ target: { value } }) => {
    setColor(value);

    setColorHistory((prevHistory) => [
      ...prevHistory.slice(0, currentIndex + 1),
      value,
      ...prevHistory.slice(currentIndex + 1),
    ]);
  };

  const handleColorEdit = ({ target: { name } }) => {
    const undo = currentIndex - 1;
    const redo = currentIndex + 1;

    if (name === 'undo') {
      setColor(colorHistory[undo]);
      setCurrentIndex(undo);
    } else {
      setColor(colorHistory[redo]);
      setCurrentIndex(redo);
    }
  };

  return {
    color,
    colorHistory,
    currentIndex,
    handleAddColor,
    handleColorEdit,
  };
};
