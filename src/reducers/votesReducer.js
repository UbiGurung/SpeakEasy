import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SUMBIT_VOTE:
      return {
          ...state,
          [action.timeInterval]: {
            vote: action.voteNumber
          }
      }

    case actionTypes.SIGN_OUT:
        return {}
        
    default:
      return state;
  }
};