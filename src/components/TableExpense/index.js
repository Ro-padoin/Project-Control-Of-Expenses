import React, { memo } from 'react';
import Td from '../Td';
import Th from '../Th';

function TableExpense() {
  return (
    <table>
      <thead>
        <Th />
      </thead>
      <tbody>
        <Td />
      </tbody>
    </table>
  );
}

export default memo(TableExpense);
