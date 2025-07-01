import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('applies grey background when disabled', () => {
  const { getByText } = render(<Button label="Disabled" disabled />);
  expect(getByText('Disabled')).toHaveStyle('background-color: #ccc');
});
