import { combineReducers } from 'redux';
import phones from './phone';
import auth from './auth';
import notification from './notice';
import windowResize from './windowResize';
import windowLocation from './windowLocation';

export default combineReducers({
  phones,
  auth,
  notification,
  windowResize,
  windowLocation,
});
