import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('renders hero image', () => {
  render(<HeroImage src="test.jpg" alt="Hero" />);
  expect(screen.getByAltText('Hero')).toBeVisible();
});
