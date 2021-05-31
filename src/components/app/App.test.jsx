/* eslint-disable max-len */
import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

describe('useRecord unit testing', () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(() => cleanup());

  it('renders the colorizer app, header, details, controls, and viewbox', () => {
    screen.getByText('Colorizer'); // header
    screen.getByRole('region', { name: 'details' }); // details
    screen.getByRole('region', { name: 'controls' }); // controls
    screen.getByRole('region', { name: 'viewBox' }); // viewbox
  });

  it('renders the colorPicker, colorSquare and control buttons', () => {
    // grab controls and display box
    screen.getByRole('color', { name: 'colorPicker' });
    screen.getByRole('button', { name: 'undo' });
    screen.getByRole('button', { name: 'redo' });
    screen.getByRole('figure', { name: 'colorSquare' });
  });
  /////////////////////////////////////////
  describe('User INPUT testing', () => {
    it('renders the appropriate colors based on user input, undo, and redo actions', () => {
      // grab all input variables
      const colorPicker = screen.getByRole('color', {
        name: 'colorPicker',
      });
      const colorSquare = screen.getByRole('figure', {
        name: 'colorSquare',
      });
      const undo = screen.getByRole('button', { name: 'undo' });
      const redo = screen.getByRole('button', { name: 'redo' });

      //////////////////// RGBRGBRGB ////////////////////

      // mimics user selecting color from input
      fireEvent.change(colorPicker, { target: { value: '#FF0000' } }); // sets color to RED
      expect(colorSquare).toHaveStyle('background-color: #FF0000');

      fireEvent.change(colorPicker, { target: { value: '#00FF00' } }); // sets color to GREEN
      expect(colorSquare).toHaveStyle('background-color: #00FF00');

      fireEvent.change(colorPicker, { target: { value: '#0000FF' } }); // sets color to BLUE
      expect(colorSquare).toHaveStyle('background-color: #0000FF');

      //////////////////// RGBRGBRGB ////////////////////

      // current order: RED <== GREEN <== BLUE

      // mimics the user pressing 'UNDO' x2
      fireEvent.click(undo); // color changes back to GREEN
      expect(colorSquare).toHaveStyle('background-color: #00FF00');

      fireEvent.click(undo); // color changes back to RED
      expect(colorSquare).toHaveStyle('background-color: #FF0000');

      //////////////////// RGBRGBRGB ////////////////////

      // current order: RED --> GREEN

      // mimics the user pressing 'REDO'
      fireEvent.click(redo); // color changes to GREEN
      expect(colorSquare).toHaveStyle('background-color: #00FF00');

      //////////////////// RGBRGBRGB ////////////////////

      // current order: RED --> GREEN --> YELLOW
      // mimics the user selecting a brand new color, sets color to YELLOW
      fireEvent.change(colorPicker, { target: { value: '#FFFF00' } });
      expect(colorSquare).toHaveStyle('background-color: #FFFF00');

      //////////////////// RGBRGBRGB ////////////////////

      // current order: RED <== GREEN <== YELLOW
      // mimics the user again pressing 'UNDO' x2
      fireEvent.click(undo); // color changes back to GREEN
      expect(colorSquare).toHaveStyle('background-color: #00FF00');

      fireEvent.click(undo); // color changes back to RED
      expect(colorSquare).toHaveStyle('background-color: #FF0000');

      //////////////////// RGBRGBRGB ////////////////////

      // current order: RED --> GREEN --> YELLOW --> BLUE
      // mimics the user pressing 'REDO' x3
      fireEvent.click(redo); // color changes to GREEN
      expect(colorSquare).toHaveStyle('background-color: #00FF00');

      fireEvent.click(redo); // color changes to YELLOW
      expect(colorSquare).toHaveStyle('background-color: #FFFF00');

      fireEvent.click(redo); // color changes to BLUE
      expect(colorSquare).toHaveStyle('background-color: #0000FF');
    });
  });
});
