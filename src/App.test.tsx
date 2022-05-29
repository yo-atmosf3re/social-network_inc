import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { posts } from '.';

test('renders learn react link', () => {
  render(<App posts={posts} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
