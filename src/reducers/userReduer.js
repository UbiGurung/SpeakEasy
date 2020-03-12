import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SIGN_IN_ANON:
      return {
          ...state,
          authUser: action.payload
      }

    case actionTypes.SIGN_OUT:
        return {
            ...state,
            authUser: null
        }
        
    default:
      return state;
  }
};