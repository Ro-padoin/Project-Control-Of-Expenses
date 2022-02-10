import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiExchanges } from '../../actions';
import Select from '../Select';
import fetchAPI from '../../services/fetchAPI';

const INITIAL_STATE = {
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
      currency: '',
      method: '',
      tag: '',
      moedas: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { saveExpenses } = this.props;
    const { moedas, ...data } = this.state;
    saveExpenses(data);
    this.setState({ ...INITIAL_STATE });
  }

  async fetchApi() {
    const resultApi = await fetchAPI();
    const filterMoedas = Object.keys(resultApi).filter((item) => item !== 'USDT');
    this.setState({ moedas: filterMoedas });
  }

  render() {
    const { value, currency, method, tag, description, moedas } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
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

        <Select
          dataTestId="currency-input"
          id="currency-input"
          name="currency"
          onChange={ this.handleChange }
          options={ moedas }
          spanText="Moeda: "
          value={ currency }
        />

        <Select
          dataTestId="method-input"
          id="method-input"
          name="method"
          onChange={ this.handleChange }
          options={ ['Selecione', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          spanText="Método de Pagamento: "
          value={ method }
        />

        <Select
          dataTestId="tag-input"
          id="tag-input"
          name="tag"
          onChange={ this.handleChange }
          options={
            ['Selecione', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
          }
          spanText="Tag: "
          value={ tag }
        />

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
