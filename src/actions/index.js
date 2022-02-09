import { GET_EMAIL, GET_EXPENSES, GET_EXCHANGE } from './action_type';

// preciso receber o payload = e-mail,
export const getEmailLogin = (payload) => ({
  type: GET_EMAIL,
  payload,
});

// preciso receber um array com todas as despesas cadastradas
export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

// preciso receber um objeto com todos os dados do cambio
export const getExchange = (payload) => ({
  type: GET_EXCHANGE,
  payload,
});
