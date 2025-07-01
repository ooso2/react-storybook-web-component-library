import styled from 'styled-components';

export const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
