import {FETCH_TODOS, NEW_USER_REGISTER_SUCCEDED} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      console.warn('hello', action.payload)
      return action.payload;

    case NEW_USER_REGISTER_SUCCEDED:
      console.warn('user registered', action.payload);
      return state;

    default:
      return state;
  }
};