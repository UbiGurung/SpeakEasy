import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SUMBIT_VOTE:{
      return {
        ...state,
        [action.payload.timeInterval]: {
          vote: action.payload.voteNumber
        }
      }
    }

    case actionTypes.SIGN_OUT:{
      return {}
    }
    
    case actionTypes.GET_ALL_VOTES_FOR_SESSION: {
      return{
        ...state,
        allVotes: action.payload
      }
    }
        
    default:
      return state;
  }
};