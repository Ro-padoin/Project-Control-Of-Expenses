import { ADD_EXPENSES, DELETE_EXPENSE } from '../actions/action_type';

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
  case DELETE_EXPENSE:
    const newExpensesList = state.expenses.filter((expense) => expense.id !== payload);
    return {
      ...state,
      expenses: [...newExpensesList],
    };

  default:
    return state;
  }
};

export default walletReducer;
