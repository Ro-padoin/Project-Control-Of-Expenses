import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableExpense extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates }) => {
            const number = 16;
            const cambioUtilizado = Number(exchangeRates[currency].ask);
            const valueExpense = Number(value);
            const moedaConversao = (exchangeRates[currency].name)
              .substr(0, exchangeRates[currency].name.length - number);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(valueExpense).toFixed(2)}</td>
                <td>{ moedaConversao.replace('Dólar Americano', 'Dólar Comercial') }</td>
                <td>{ Number(cambioUtilizado).toFixed(2) }</td>
                <td>{ Number(cambioUtilizado * valueExpense).toFixed(2) }</td>
                <td>
                  Real
                  {' '}
                  {/* Brasileiro */}
                </td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button" data-testid="delete-btn">Excluir</button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(TableExpense);
