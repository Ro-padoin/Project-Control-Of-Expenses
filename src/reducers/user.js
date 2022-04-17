import { GET_EMAIL } from '../actions/action_type';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

// const userReducer = (state = INITIAL_STATE, {type, payload}) => {
  // switch (type) {
  // case GET_EMAIL:
    // return {
      // ...state,
      // email: payload,
    // };
  // default:
    // return state;
  // }
// };

export default userReducer;
