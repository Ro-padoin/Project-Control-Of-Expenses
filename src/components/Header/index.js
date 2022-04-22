import React from 'react';
import { useSelector } from 'react-redux';

function Header () {
  const email = useSelector(({ user })=> user.email);
  const expenses = useSelector(({wallet}) => wallet.expenses);

    const totalExpenses = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const valueExpense = Number(value);
      const exchange = Number(exchangeRates[currency].ask);
      return acc + (valueExpense * exchange);
    }, 0);

    return (
      <section class="header-container">
        <header>
          <p>
            Email:
            <span>
              { email }
            </span>
          </p>
          <p>
            Despesa Total: R$
            <span>
              { Number(totalExpenses).toFixed(2) }
            </span>
          </p>
          <p>BRL</p>
        </header>
      </section>
    );
  }

export default Header;
