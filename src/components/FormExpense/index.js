import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchApiExchanges } from '../../actions';
import Select from '../Select';
import fetchAPI from '../../services/fetchAPI';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
  currency: '',
  description: '',
  method: '',
  tag: '',
  value: 0,
};

function FormExpense () {
  const [localState, setLocalState] = useState(INITIAL_STATE);
  const [moedas, setMoedas] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi()
  }, []); 

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLocalState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleClick = () => {
    const { currency, method, tag } = localState;
    if(currency === '' || method === '' || tag === '') {
      return global.alert('Por favor, preencha todos os campos');
    }
    dispatch(fetchApiExchanges(localState));
    setLocalState({ ...INITIAL_STATE });
  }

  const fetchApi = async() => {
    const resultApi = await fetchAPI();
    const filterMoedas = Object.keys(resultApi).filter((item) => item !== 'USDT');
    setMoedas([...filterMoedas]);
  }

    return (
      <form>
        <label htmlFor="valor-despesas">
          Valor:
          <input
            type="text"
            id="valor-despesas"
            name="value"
            value={ localState.value }
            onChange={ handleChange }
          />
        </label>

        <Select
          id="currency-input"
          name="currency"
          onChange={ handleChange }
          options={ moedas }
          spanText="Moeda: "
          value={ localState.currency }
        />

        <Select
          id="method-input"
          name="method"
          onChange={ handleChange }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          spanText="Método de Pagamento: "
          value={ localState.method }
        />

        <Select
          id="tag-input"
          name="tag"
          onChange={ handleChange }
          options={
            ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
          }
          spanText="Tag: "
          value={ localState.tag }
        />

        <label htmlFor="descricao">
          Descrição:
          <textarea
            id="descricao"
            name="description"
            value={ localState.description }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }

FormExpense.propTypes = {
  saveExpenses: PropTypes.func,
}.isRequired;

export default FormExpense;