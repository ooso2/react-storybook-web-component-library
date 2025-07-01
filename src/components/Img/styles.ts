import styled from 'styled-components';

export const StyledImg = styled.img<{
  width: string;
  height: string;
  disabled?: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  border-radius: 6px;
`;
