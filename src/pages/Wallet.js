import React from 'react';
import FormExpense from '../components/FormExpense';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

function Wallet () {
    return (
      <section>
        <Header />
        <FormExpense />
        <TableExpense />
      </section>
    );
  }

export default Wallet;
