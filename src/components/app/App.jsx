import React from 'react';
import { useRecord } from '../../hooks/useRecord';

export default function App() {
  const {
    currentValue,
    recordColorChange,
    // undo,
    // redo
  } = useRecord();

  return (
    <>
      <h1>Colorizer: Add, undo, & redo color choices</h1>
      <>
        <input type="color" value={currentValue} onChange={recordColorChange} />
        {/* <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button> */}
      </>
      <div
        style={{
          backgroundColor: currentValue,
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
}
