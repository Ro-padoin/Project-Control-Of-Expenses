import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <FormExpense />
      </section>
    );
  }
}

export default Wallet;
