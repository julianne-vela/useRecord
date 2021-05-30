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
  it('renders the colorizer app, header, details, controls, and viewbox', () => {
    render(<App />);

    screen.getByText('Colorizer'); // header
    screen.getByRole('region', { name: 'details' }); // details
    screen.getByRole('region', { name: 'controls' }); // controls
    screen.getByRole('region', { name: 'viewBox' }); // viewbox
  });

  it('renders the selected color and updates according to controls activated', () => {
    render(<App />);

    // grab controls and display box
    const colorPicker = screen.getByRole('color', { name: 'colorPicker' });
    const undo = screen.getByRole('button', { name: 'undo' });
    const redo = screen.getByRole('button', { name: 'redo' });
    const colorSquare = screen.getByRole('figure', { name: 'colorSquare' });

    // mimic user input to select a color, click button to undo change & click button to redo change

    fireEvent.input(colorPicker, { target: { value: '#FF0000' } });
    expect(colorSquare).toHaveStyle('background-color: #FF0000');
  });
});
