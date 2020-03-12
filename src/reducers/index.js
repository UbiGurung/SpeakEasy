import {combineReducers} from 'redux';
import data from './dataReducer';
import userConfig from './userReduer';
import sessions from './sessionsReducer';
import votes from './votesReducer';

export default combineReducers({
  data,
  userConfig,
  sessions,
  votes
});