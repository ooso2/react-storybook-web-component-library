import React from 'react';
import { TextProps } from './Text.types';
import StyledText from './styles';

export const Text: React.FC<TextProps> = ({ content, size = 'medium' }) => (
  <StyledText size={size} content={content} />
);