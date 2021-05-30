/* eslint-disable max-len */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import App from './App';

describe('useRecord unit testing', () => {
  afterEach(() => cleanup());
  it('renders a control box with options to select color, undo, and redo actions, and a display box that shows the current color', () => {
    render(<App />);

    screen.getByText('Colorizer: Add, undo, & redo color choices');
  });
});
