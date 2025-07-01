import styled from 'styled-components';

export const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};

  th, td {
    padding: 0.75rem;
    border: 1px solid #ccc;
    text-align: left;
  }
`;
