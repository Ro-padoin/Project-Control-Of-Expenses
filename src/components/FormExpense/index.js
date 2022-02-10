import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiExchanges } from '../../actions';

const DATA = {
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
};
class FormExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { saveExpenses } = this.props;
    saveExpenses(this.state);
    this.setState({ ...DATA });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    return (
      <form>
        <label htmlFor="valor-despesas">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="valor-despesas"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <span>Moeda: </span>
        <select
          data-testid="currency-input"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          <option>USD</option>
        </select>
        <span>Método de Pagamento: </span>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <span>Tag: </span>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <label htmlFor="descricao">
          <textarea
            data-testid="description-input"
            id="descricao"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(fetchApiExchanges(payload)),
});

FormExpense.propTypes = {
  saveExpenses: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormExpense);
