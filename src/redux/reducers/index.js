import { combineReducers } from 'redux';
import phones from './phone';
import auth from './auth';
import notification from './notice';

export default combineReducers({
  phones,
  auth,
  notification,
});
