import React from 'react';
import { CardProps } from './Card.types';
import { StyledCard } from './styles';

export const Card: React.FC<CardProps> = ({ title, content, disabled = false }) => {
  return (
    <StyledCard disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};
