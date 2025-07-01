import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './styles';

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor,
}) => (
  <StyledButton
    label={label}
    onClick={onClick}
    disabled={disabled}
    style={backgroundColor ? { backgroundColor } : undefined}
  >
    {label}
  </StyledButton>
);