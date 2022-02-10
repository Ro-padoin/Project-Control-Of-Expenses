import { ADD_EXPENSES, GET_EXCHANGE } from '../actions/action_type';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentId: -1,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  const currentId = state.currentId + 1;
  switch (type) {
  case ADD_EXPENSES:
    return {
      ...state,
      currentId,
      expenses: [...state.expenses,
        {
          id: currentId,
          ...payload.expenses,
          exchangeRates: payload.exchangeRates,
        }],
    };
  case GET_EXCHANGE:
    return {
      ...state,
      currencies: [...state.currencies, payload],
    };

  default:
    return state;
  }
};

export default walletReducer;
