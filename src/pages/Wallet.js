import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
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
