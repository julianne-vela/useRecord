/* eslint-disable max-len */
import React from 'react';
import {
  screen,
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import App from './App';

describe('useRecord unit testing', () => {
  afterEach(() => cleanup());
  it('renders a control box with options to select color, undo, and redo actions, and a display box that shows the current color', () => {
    render(<App />);

    screen.getByText('Colorizer: Add, undo, & redo color choices');
  });

  it('renders the selected color and updates according to controls activated', () => {
    render(<App />);

    const input = screen.getByRole('input');
  });
});
