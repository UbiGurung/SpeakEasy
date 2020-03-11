import * as actionTypes from '../actions/types';
import * as R from 'ramda';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SIGN_OUT:{
        return {}
    }
        
    case actionTypes.CREATE_SESSION:{
        const {sessionId, name, userId} = action.payload

        return{
            ...state,
            [sessionId]: {name, userId}
        }
    }
        
    case actionTypes.FETCH_ALL_SESSIONS:{
        console.warn('allSessions', action.payload)
        const {allSessions, userId} = action.payload;

        const filteredSessionsForUser = R.filter((x) => x.userId === userId, allSessions);
        return filteredSessionsForUser
    }
        
    default:
      return state;
  }
};