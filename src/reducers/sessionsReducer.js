import * as actionTypes from '../actions/types';
import * as R from 'ramda';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SIGN_OUT:{
        return {}
    }
        
    case actionTypes.CREATE_SESSION:{
        const {sessionId, name, speakerId, date} = action.payload

        return{
            ...state,
            error: '',
            [sessionId]: {name, speakerId, date}
        }
    }
        
    case actionTypes.FETCH_ALL_SESSIONS:{
        const {allSessions, userId} = action.payload;

        const filteredSessionsForUser = allSessions && R.filter((x) => x.speakerId === userId, allSessions);

        return {
            ...state,
            filteredSessionsForUser,
            error: ''
        }
    }

    case actionTypes.FETCH_SESSION: {
        const {sessionId, data} = action.payload;

        if(data === null){
            return {
                ...state,
                error: "Room does not exist"
            }
        }   

        return {
            ...state,
            currentSession: {
                id: sessionId,
                details: data
            },
            error: ''
        }
    }

    case actionTypes.FETCH_SESSION_ENROLMENT:{
        return{
            ...state,
            error: '',
            currentSessionEnrolment: action.payload
        }
    }
        
    default:
      return state;
  }
};