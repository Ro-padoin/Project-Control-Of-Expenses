import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const currency = expenses.map((item) => item.expenses.currency).toString();
    const valueExpense = expenses.map((item) => item.expenses.value);
    const exchangeRates = expenses.map((item) => item.exchangeRates)
      .map((element) => element[currency]);
    const conversion = Number(exchangeRates.map((item) => item.ask));

    console.log(valueExpense, conversion);

    // const sumExpenses = valueExpense.reduce((acc, expenseValue) => {
    //   acc += expenseValue;
    //   return acc;
    // }, 0.00);

    return (
      <section>
        <header className="container-header">
          <p>
            Email:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field">
              {/* {valueExpense.length !== 0 ? Number(sumExpenses).toFixed(2) : 0} */}
            </span>
          </p>

          <p data-testid="header-currency-field">BRL</p>
        </header>
      </section>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
