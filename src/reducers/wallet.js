import { GET_EXPENSES, GET_EXCHANGE } from '../actions/action_type';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_EXCHANGE:
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };

  default:
    return state;
  }
};

export default walletReducer;
