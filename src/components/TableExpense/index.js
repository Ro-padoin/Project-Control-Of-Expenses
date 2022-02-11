import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions';

class TableExpense extends Component {
  constructor() {
    super();

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(id) {
    const { deleteLine } = this.props;
    deleteLine(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
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
        </thead>
        <tbody>
          { expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates }) => {
            const cambioUtilizado = Number(exchangeRates[currency].ask);
            const valueExpense = Number(value);
            const moedaConversao = (exchangeRates[currency].name);

            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(valueExpense).toFixed(2)}</td>
                <td>{ moedaConversao }</td>
                <td>{ Number(cambioUtilizado).toFixed(2) }</td>
                <td>{ Number(cambioUtilizado * valueExpense).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleClickDelete(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteLine: (payload) => dispatch(deleteExpense(payload)),
});

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
