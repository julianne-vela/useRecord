import React from 'react';
import { useRecord } from '../../hooks/useRecord';
import style from './app.css';

export default function App() {
  const { currentValue, recordColorChange, undo, redo } = useRecord();

  return (
    <>
      <header className={style.header}>
        <h1 className={style.shadow}>Colorizer</h1>
      </header>
      <main className={style.main}>
        <section aria-label="details" className={style.details}>
          <h4 className={style.subTitle}>
            A quick and dirty <br></br>
            <span className={style.rainbow}>color picking trial</span> <br></br>
            in custom hooks()
          </h4>
          <details>
            <summary>How to Use</summary>
            <p>#1: Pick a color, any color!</p>
            <p>
              #2: Meh, go ahead and try
              <span className={style.rainbow}> undoing</span> that change.
            </p>
            <p>
              #3: Nah, def better the other way.{' '}
              <span className={style.rainbow}>#redo</span>
            </p>
          </details>
        </section>
        <section className={style.container}>
          <section aria-label="controls" className={style.controls}>
            <label htmlFor="colorPicker">
              <input
                id="colorPicker"
                aria-label="colorPicker"
                role="color"
                type="color"
                value={currentValue}
                onChange={recordColorChange}
              />
            </label>
            <>
              <button aria-label="undo" onClick={undo}>
                Undo
              </button>
              <button aria-label="redo" onClick={redo}>
                Redo
              </button>
            </>
          </section>
          <section aria-label="viewBox" className={style.viewBox}>
            <figcaption
              aria-label="currentColor"
              style={{ marginBottom: '5px' }}
              className={style.rainbow}
            >
              {currentValue}
            </figcaption>
            <figure
              aria-label="colorSquare"
              className={style.colorSquare}
              style={{ backgroundColor: currentValue }}
            ></figure>
          </section>
        </section>
      </main>
    </>
  );
}
