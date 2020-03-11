import {combineReducers} from 'redux';
import data from './dataReducer';
import userConfig from './userReduer';
import sessions from './sessionsReducer';

export default combineReducers({
  data,
  userConfig,
  sessions
});