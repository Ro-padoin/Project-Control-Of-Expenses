import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <FormExpense />
        <TableExpense />
      </section>
    );
  }
}

export default Wallet;
