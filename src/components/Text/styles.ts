import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }) =>
    size === 'small' ? '0.8rem' : size === 'large' ? '1.5rem' : '1rem'};
  color: #333;
`;
export default StyledText;
