import React from 'react';

export interface TableProps {
  headers: string[];
  data: string[][];
  disabled?: boolean;
}

export const Table: React.FC<TableProps> = ({ headers, data, disabled = false }) => (
  <table style={disabled ? { opacity: 0.5 } : undefined}>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => (
            <td key={j}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
