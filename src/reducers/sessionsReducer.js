import * as actionTypes from '../actions/types';
import * as R from 'ramda';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SIGN_OUT:{
        return {}
    }
        
    case actionTypes.CREATE_SESSION:{
        const {sessionId, name, speakerId} = action.payload

        return{
            ...state,
            [sessionId]: {name, speakerId}
        }
    }
        
    case actionTypes.FETCH_ALL_SESSIONS:{
        const {allSessions, userId} = action.payload;

        const filteredSessionsForUser = allSessions && R.filter((x) => x.userId === userId, allSessions);
        return filteredSessionsForUser
    }

    case actionTypes.FETCH_SESSION: {
        const {sessionId, data} = action.payload;
        return {
            ...state,
            currentSession: {
                id: sessionId,
                details: data
            }
        }
    }

    case actionTypes.FETCH_SESSION_ENROLMENT:{
        return{
            ...state,
            currentSessionEnrolment: action.payload
        }
    }
        
    default:
      return state;
  }
};