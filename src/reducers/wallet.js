import { ADD_EXPENSES, DELETE_EXPENSE } from '../actions/action_type';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentId: -1,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  const currentId = state.currentId + 1;
  const newExpensesList = state.expenses.filter((expense) => expense.id !== payload);
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
  // case ADD_CURRENCIES:
  //   return {
  //     ...state,
  //     currencies: [...payload],
  //   };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...newExpensesList],
    };

  default:
    return state;
  }
};

export default walletReducer;
