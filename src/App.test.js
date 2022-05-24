import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders App component', () => {
      render(<App />);
    });

    test('renders App component', () => {
      render(<App />);
      screen.getByText('Unit Conversion Test');
      expect(screen.getByText('Unit Conversion Test')).toBeInTheDocument();

    });
    test('renders App component', () => {
      render(<App />);
      screen.getByText('Enter Conversion Below:');
    });
    
});