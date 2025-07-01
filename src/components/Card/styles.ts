import styled from 'styled-components';

export const StyledCard = styled.div<{ disabled?: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#eee' : '#fff')};
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
