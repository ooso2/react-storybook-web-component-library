import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const Label: React.FC<LabelProps> = ({ text, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
);
