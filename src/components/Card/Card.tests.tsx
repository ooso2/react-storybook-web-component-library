import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import 'jest-styled-components';

test('renders Card content', () => {
  render(<Card title="Test" content="Card body text" />);
  expect(screen.getByText('Card body text')).toBeVisible();
});

test('Card has disabled styles', () => {
  render(<Card title="Test" content="Disabled card" disabled />);
  const card = screen.getByText('Disabled card').parentElement;
  expect(card).toHaveStyleRule('cursor', 'not-allowed');
  expect(card).toHaveStyleRule('opacity', '0.6');
});
