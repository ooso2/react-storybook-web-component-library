import React from 'react';
// import { TableRow, TableCell, TableHeader, TableFooter } from './styles';

export const Table: React.FC = () => (
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={2}>Footer</td>
      </tr>
    </tfoot>
  </table>
);
