import React from 'react';
import { HeroImageProps } from './HeroImage.types';
import { StyledHero } from './styles';

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt = '', height = '300px' }) => (
  <StyledHero src={src} alt={alt} height={height} />
);
