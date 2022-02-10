import { GET_EMAIL, ADD_EXPENSES, GET_EXCHANGE } from './action_type';
import fetchAPI from '../services/fetchAPI';

// preciso receber o payload = e-mail,
export const getEmailLogin = (payload) => ({
  type: GET_EMAIL,
  payload,
});

// preciso receber um objeto com despesas e cambio atual
export const getExpenses = (expenses, exchangeRates) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
    exchangeRates,
  },
});

// preciso receber um objeto com todos os dados do cambio
export const getExchange = (payload) => ({
  type: GET_EXCHANGE,
  payload,
});

export const fetchApiExchanges = (expenses) => async (dispatch) => {
  const exchangeRates = await fetchAPI();
  dispatch(getExpenses(expenses, exchangeRates));
};
