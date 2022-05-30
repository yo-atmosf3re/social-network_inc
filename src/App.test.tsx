import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { state } from './redux/state';

test('renders learn react link', () => {
  render(<App state={state} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
