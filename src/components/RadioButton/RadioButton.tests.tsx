import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders label', () => {
    const { getByLabelText } = render(
      <RadioButton
        name="group"
        label="Option A"
        value="A"
        checked={false}
        onChange={() => {}}
      />
    );
    expect(getByLabelText('Option A')).toBeInTheDocument();
  });

  it('applies disabled style', () => {
    const { getByLabelText } = render(
      <RadioButton
        name="group"
        label="Option B"
        value="B"
        checked={false}
        onChange={() => {}}
        disabled
      />
    );
    expect(getByLabelText('Option B')).toBeDisabled();
  });
});
