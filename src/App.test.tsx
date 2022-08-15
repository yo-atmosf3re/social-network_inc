import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import oldStore from './redux/store';


test('renders learn react link', () => {
  render(<App oldStore={oldStore} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
