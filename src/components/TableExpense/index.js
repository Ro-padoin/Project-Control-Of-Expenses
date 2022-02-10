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
            const cambioUtilizado = Number(exchangeRates[currency].ask).toFixed(2);
            const valueExpense = Number(value).toFixed(2);
            const moedaConversao = (exchangeRates[currency].name);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ ` ${currency} ${valueExpense}` }</td>
                <td>{ moedaConversao }</td>
                <td>{ cambioUtilizado }</td>
                <td>{ cambioUtilizado * valueExpense }</td>
                <td>Real Brasileiro</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
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
