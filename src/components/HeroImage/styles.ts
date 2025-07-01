import styled from 'styled-components';

export const StyledHero = styled.img<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || '300px'};
  object-fit: cover;
  display: block;
`;