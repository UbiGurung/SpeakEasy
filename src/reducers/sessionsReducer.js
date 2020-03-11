import * as actionTypes from '../actions/types';

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

        // const filteredSessionsForUser = allSessions.filter(x => x.userId === userId);
        return allSessions
    }
        
    default:
      return state;
  }
};