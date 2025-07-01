import { render, screen } from '@testing-library/react';
import React from 'react';
import { Text } from './Text';

describe('Text component', () => {
  it('renders the provided content', () => {
    render(<Text content="Hello, world!" />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('applies medium size by default', () => {
    render(<Text content="Medium text" />);
    const textElement = screen.getByText('Medium text');
    expect(textElement).toBeVisible();
  });
});
