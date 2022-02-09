import { GET_EMAIL, GET_EXPENSES } from './action_type';

export const getEmailLogin = (payload) => ({
  type: GET_EMAIL,
  payload,
});
// preciso receber o payload = e-mail,

export const getExpenses = () => ({
  type: GET_EXPENSES,
});
