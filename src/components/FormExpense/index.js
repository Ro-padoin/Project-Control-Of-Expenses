import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiExchanges } from '../../actions';
import fetchAPI from '../../services/fetchAPI';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

const INITIAL_STATE = {
  currency: '',
  description: '',
  method: '',
  tag: '',
  value: 0,
};

function FormExpense() {
  const [localState, setLocalState] = useState(INITIAL_STATE);
  const [moedas, setMoedas] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi()
  }, []);

  const handleChange = ({ target: { name, value } }) => setLocalState(prevState => ({ ...prevState, [name]: value }));

  const handleClick = () => {
    const { currency, method, tag } = localState;
    if (currency === '' || method === '' || tag === '') return global.alert('Por favor, preencha todos os campos');
    dispatch(fetchApiExchanges(localState));
    setLocalState({ ...INITIAL_STATE });
  }

  const fetchApi = async () => {
    const resultApi = await fetchAPI();
    const filterMoedas = Object.keys(resultApi).filter((item) => item !== 'USDT');
    setMoedas([...filterMoedas]);
  }

  return (
    <section class="form-container" >
      <form>
        <Input
          id="valor-despesas"
          name="value"
          onChange={handleChange}
          textLabel="Valor: "
          type="text"
          value={localState.value}
        />

        <Select
          id="currency-input"
          name="currency"
          onChange={handleChange}
          options={moedas}
          labelText="Moeda: "
          value={localState.currency}
        />

        <Select
          id="method-input"
          name="method"
          onChange={handleChange}
          options={['Dinheiro', 'Cartão de crédito', 'Cartão de débito']}
          labelText="Método de Pagamento: "
          value={localState.method}
        />

        <Select
          id="tag-input"
          name="tag"
          onChange={handleChange}
          options={
            ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
          }
          labelText="Tag: "
          value={localState.tag}
        />

        <label htmlFor="descricao">
          Descrição:
          <textarea
            id="descricao"
            name="description"
            value={localState.description}
            onChange={handleChange}
          />
        </label>
        <Button
          type="button"
          onClick={handleClick}
        >
          Adicionar
        </Button>
      </form>
    </section>
  );
}

export default FormExpense;