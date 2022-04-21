import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const totalExpenses = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const valueExpense = Number(value);
      const exchange = Number(exchangeRates[currency].ask);
      return acc + (valueExpense * exchange);
    }, 0);

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
              { Number(totalExpenses).toFixed(2) }
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
