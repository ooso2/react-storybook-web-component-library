import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { StyledRadio } from './styles';

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  value,
  checked,
  onChange,
  disabled = false,
}) => (
  <label>
    <StyledRadio
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      disabled={disabled}
    />
    {label}
  </label>
);
