import { GET_EMAIL, ADD_EXPENSES, DELETE_EXPENSE } from './action_type';
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

// preciso receber id
export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

// export const getCurrencies = (payload) => ({
//   type: ADD_CURRENCIES,
//   payload,
// });

export const fetchApiExchanges = (expenses) => async (dispatch) => {
  const exchangeRates = await fetchAPI();
  dispatch(getExpenses(expenses, exchangeRates));
};

// export const fetchCurrencies = () => async (dispatch) => {
//   const resultApi = await fetchAPI();
//   const filterMoedas = Object.keys(resultApi).filter((item) => item !== 'USDT');
//   dispatch(getCurrencies(filterMoedas));
// };
