import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label with correct text', () => {
  render(<Label text="Name:" />);
  expect(screen.getByText('Name:')).toBeInTheDocument();
});
