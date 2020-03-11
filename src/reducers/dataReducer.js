import {FETCH_TODOS} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      console.warn({state})
      return action.payload;
    default:
      return state;
  }
};