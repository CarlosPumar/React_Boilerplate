import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../PagesComponents/Home';

test('renders content', () => {
  render(<Home />);

  const element = screen.getByText('Accept');
  expect(element).toBeDefined();
});
