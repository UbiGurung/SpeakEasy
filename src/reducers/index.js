import {combineReducers} from 'redux';
import data from './dataReducer';
import userConfig from './userReduer';

export default combineReducers({
  data,
  userConfig
});