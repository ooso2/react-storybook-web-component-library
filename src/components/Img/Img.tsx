import React from 'react';
import { ImgProps } from './Img.types';
import { StyledImg } from './styles';

export const Img: React.FC<ImgProps> = ({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  disabled = false,
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
  />
);