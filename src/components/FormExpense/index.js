import React, { Component } from 'react';

class FormExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      moeda: '',
      pagamento: '',
      tag: '',
      descricao: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form>
        <label htmlFor="valor-despesas">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="valor-despesas"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <span>Moeda: </span>
        <select
          data-testid="currency-input"
          name="moeda"
          value={ moeda }
          onChange={ this.handleChange }
        >
          <option>BRL</option>
        </select>
        <span>Método de Pagamento: </span>
        <select
          data-testid="method-input"
          name="pagamento"
          value={ pagamento }
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
            name="descricao"
            value={ descricao }
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

export default FormExpense;
