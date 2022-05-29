import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { dialogData, messages, posts } from '.';

test('renders learn react link', () => {
  render(<App posts={posts} dialogData={dialogData} messages={messages} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
