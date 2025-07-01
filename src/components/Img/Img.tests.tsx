import React from 'react';
import { render } from '@testing-library/react';
import { Img } from './Img';

describe('Img', () => {
  it('renders image with alt text', () => {
    const { getByAltText } = render(
      <Img src="test.jpg" alt="Test image" />
    );
    expect(getByAltText('Test image')).toBeInTheDocument();
  });

  it('applies disabled style', () => {
    const { getByAltText } = render(
      <Img src="test.jpg" alt="Disabled image" disabled />
    );
    expect(getByAltText('Disabled image')).toHaveStyle('opacity: 0.5');
  });
});
